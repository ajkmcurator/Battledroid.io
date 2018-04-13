// Dependencies
var express = require('express');
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var url = require('url');
var fs = require('fs');

// Variables
var users = {};
var authList = require('./users.json');

// Set the port (node server.js [port])
// process.argv : 0:program 1:file 2:(in this case)port
if (process.argv[2] == undefined) {
  var port = 80;
} else {
  var port = process.argv[2]; // Use node server.js [port]
}

// Routing
app.use('/static', express.static(__dirname + '/static'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/static/index.html');
});

// Upon a connection, keep it open via this callback
io.on('connection', function(socket){
  // Message upon disconnection
  socket.on('disconnect', function(){
    if (users[socket.id] !== undefined) {
      header='> User [';
      if (authList[users[socket.id].name]['admin']) {
        header = "> Admin [<img src='/static/admin.png'> "}
      io.to(users[socket.id].room).emit('message', header+"<span style='"+authList[users[socket.id].name]['nameStyle']+"'>"+users[socket.id].name+"</span>] has left");
      delete users[socket.id];
    }
  });

  // Message upon joining a room and room switching script
  socket.on('join', function(data){
    users[socket.id] = {
      name:data[0],
      room:data[1]
    };
    socket.join(data[1]);
    header='> User [';
    if (authList[data[0]]['admin']) {
      header = "> Admin [<img src='/static/admin.png'> "}
    io.to(data[1]).emit('message', header+"<span style='"+authList[data[0]]['nameStyle']+"'>"+data[0]+"</span>] has joined!");
  });

  // Auth
  socket.on('auth', function(data){
    var user = data[0];
    var pwd = data[1];
    var uData = authList[user];
    } else if (uData == undefined || uData.pass !== pwd) {
      io.to(socket.id).emit('err', "Error: Username / password not recognized");
    } else {
      io.to(socket.id).emit('a-ok');
    } 
  });

  // Message sending script allowing for username colors
  socket.on("message", function(data){
    var send = true;
    if (users[socket.id] !== undefined) {
      var senderName = users[socket.id].name;
      if (send) {
        var header = '';
        if (authList[senderName]['admin']) {
          header = "<img src='/static/admin.png'> "}

        // Graft together an unnecessarily complicated packet =)
        var packet = "["+header+"<span style='"+authList[senderName]['nameStyle']+"'>"+senderName+"</span>] "+data;
        if(users[socket.id] !== undefined) {io.to(users[socket.id].room).emit('message', packet);}
      }
    }
  });

  // User querying
  socket.on('query', function(){
    if (users[socket.id] !== undefined) {
      var rep = [];
      var cRoom = users[socket.id].room;
      for (id in users) {
        if (users[id].room == cRoom) {
          rep.push(users[id].name);
        }
      }
      io.to(socket.id).emit('users online', rep);
    }
  });

  // Log a new user account request
  socket.on('new user', function(data){
    if (data[0] == '' || data[1] == 0) {
      io.to(socket.id).emit('err', "Error: Username / password can not be blank!");
    } else if (authList[data[0]] !== undefined) {
      io.to(socket.id).emit('err', "Error: Username already in use!");
    } else {
      newUser = {
              "active":true,
              "admin":false,
              "nameStyle":"",
              "pass":data[1]
            };
            authList[data[0]] = newUser;
            // Write to users.json
            content = JSON.stringify(authList);
            fs.writeFile("users.json", content, 'utf8', function (err) {
              if (err) {return console.log(err);} else {io.emit('message', "> User successfully added!");}
              console.log(data[0]+" has signed up!");});
      io.to(socket.id).emit('err', "Success! You may now log in.");
    }
  });
});


// Start the server
http.listen(port, function(){
  console.log('Listening on port:'+port);
});
