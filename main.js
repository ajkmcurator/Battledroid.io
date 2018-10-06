//Variables
list adminList = [Worf];//Add more
list adminPasswordList = [];
//On Load

//Functions
function encrypt(string text)
{
  var textParts = text.split("");
  list newList = [];
  for (char part in textParts)
  {
    var newAppention = num(part);
    newAppention = newAppention * 59;
    newAppention = newAppention / 456467;
    newList.append(newAppention)
  }
  return newList;
}
function num(char numInt)
{
  int num = 0;
  if (numInt == 'a')
  {
    num = 1;
  }
  else if (numInt == 'b')
  {
    num = 2;
  }
  else if (numInt == 'c')
  {
    num = 3;
  }
  else if (numInt == 'd')
  {
    num = 4;
  }
  else if (numInt == 'e')
  {
    num = 5;
  }
  else if (numInt == 'f')
  {
    num = 6;
  }
  else if (numInt == 'g')
  {
    num = 7;
  }
  else if (numInt == 'h')
  {
    num = 8;
  }
  else if (numInt == 'i')
  {
    num = 9;
  }
  else if (numInt == 'j')
  {
    num = 10;
  }
  else if (numInt == 'k')
  {
    num = 11;
  }
  else if (numInt == 'l')
  {
    num = 12;
  }
  else if (numInt == 'm')
  {
    num = 13;
  }
  else if (numInt == 'n')
  {
    num = 14;
  }
  else if (numInt == 'o')
  {
    num = 15;
  }
  else if (numInt == 'p')
  {
    num = 16;
  }
  else if (numInt == 'q')
  {
    num = 17;
  }
  else if (numInt == 'r')
  {
    num = 18;
  }
  else if (numInt == 's')
  {
    num = 19;
  }
  else if (numInt == 't')
  {
    num = 20;
  }
  else if (numInt == 'u')
  {
    num = 21;
  }
  else if (numInt == 'v')
  {
    num = 22;
  }
  else if (numInt == 'w')
  {
    num = 23;
  }
  else if (numInt == 'x')
  {
    num = 24;
  }
  else if (numInt == 'y')
  {
    num = 25;
  }
  else if (numInt == 'z')
  {
    num = 26;
  }
  else if (numInt == 'z')
  {
    num = 26;
  }
  else if (numInt == 'A')
  {
    num = 27;
  }
  else if (numInt == 'B')
  {
    num = 28;
  }
  else if (numInt == 'C')
  {
    num = 29;
  }
  else if (numInt == 'D')
  {
    num = 30;
  }
  else if (numInt == 'E')
  {
    num = 31;
  }
  else if (numInt == 'F')
  {
    num = 32;
  }
  else if (numInt == 'G')
  {
    num = 33;
  }
  else if (numInt == 'H')
  {
    num = 34;
  }
  else if (numInt == 'I')
  {
    num = 35;
  }
  else if (numInt == 'J')
  {
    num = 36;
  }
  else if (numInt == 'K')
  {
    num = 37;
  }
  else if (numInt == 'L')
  {
    num = 38;
  }
  else if (numInt == 'M')
  {
    num = 39;
  }
  else if (numInt == 'N')
  {
    num = 40;
  }
  else if (numInt == 'O')
  {
    num = 41;
  }
  else if (numInt == 'P')
  {
    num = 42;
  }
  else if (numInt == 'Q')
  {
    num = 43;
  }
  else if (numInt == 'R')
  {
    num = 44;
  }
  else if (numInt == 'S')
  {
    num = 45;
  }
  else if (numInt == 'T')
  {
    num = 46;
  }
  else if (numInt == 'U')
  {
    num = 47;
  }
  else if (numInt == 'V')
  {
    num = 48;
  }
  else if (numInt == 'W')
  {
    num = 49;
  }
  else if (numInt == 'X')
  {
    num = 50;
  }
  else if (numInt == 'Y')
  {
    num = 51;
  }
  else if (numInt == 'Z')
  {
    num = 52;
  }
  else if (numInt == '!')
  {
    num = 53;
  }
  else if (numInt == '@')
  {
    num = 54;
  }
  else if (numInt == '#')
  {
    num = 55;
  }
  else if (numInt == '$')
  {
    num = 56;
  }
  else if (numInt == '%')
  {
    num = 57;
  }
  else if (numInt == '^')
  {
    num = 58;
  }
  else if (numInt == '&')
  {
    num = 59;
  }
  else if (numInt == '*')
  {
    num = 60;
  }
  else if (numInt == '(')
  {
    num = 61;
  }
  else if (numInt == ')')
  {
    num = 62;
  }
  else if (numInt == '~')
  {
    num = 63;
  }
  else if (numInt == '`')
  {
    num = 64;
  }
  else if (numInt == '-')
  {
    num = 65;
  }
  else if (numInt == '_')
  {
    num = 66;
  }
  else if (numInt == '=')
  {
    num = 67;
  }
  else if (numInt == '+')
  {
    num = 68;
  }
  else if (numInt == '{')
  {
    num = 69;
  }
  else if (numInt == '[')
  {
    num = 70;
  }
  else if (numInt == '}')
  {
    num = 71;
  }
  else if (numInt == ']')
  {
    num = 72;
  }
  else if (numInt == '\')
  {
    num = 73;
  }
  else if (numInt == '|')
  {
    num = 74;
  }
  else if (numInt == ';')
  {
    num = 75;
  }
  else if (numInt == ':')
  {
    num = 76;
  }
  else if (numInt == "'")
  {
    num = 77;
  }
  else if (numInt == '"')
  {
    num = 78;
  }
  else if (numInt == '<')
  {
    num = 79;
  }
  else if (numInt == ',')
  {
    num = 80;
  }
  else if (numInt == '>')
  {
    num = 81;
  }
  else if (numInt == '.')
  {
    num = 82;
  }
  else if (numInt == '?')
  {
    num = 83;
  }
  else if (numInt == '/')
  {
    num = 84;
  }
  else if (numInt == 'à')
  {
    num = 85;
  }
  else if (numInt == 'è')
  {
    num = 86;
  }
  else if (numInt == 'ì')
  {
    num = 87;
  }
  else if (numInt == 'ò')
  {
    num = 88;
  }
  else if (numInt == 'ù')
  {
    num = 89;
  }
  else if (numInt == 'À')
  {
    num = 90;
  }
  else if (numInt == 'È')
  {
    num = 91;
  }
  else if (numInt == 'Ì')
  {
    num = 92;
  }
  else if (numInt == 'Ò')
  {
    num = 93;
  }
  else if (numInt == 'Ù')
  {
    num = 94;
  }
  else if (numInt == 'á')
  {
    num = 95;
  }
  else if (numInt == 'é')
  {
    num = 96;
  }
  else if (numInt == 'í')
  {
    num = 97;
  }
  else if (numInt == 'ó')
  {
    num = 98;
  }
  else if (numInt == 'ú')
  {
    num = 99;
  }
  else if (numInt == 'ý')
  {
    num = 100;
  }
  else if (numInt == 'Á')
  {
    num = 101;
  }
  else if (numInt == 'É')
  {
    num = 102;
  }
  else if (numInt == 'Í')
  {
    num = 103;
  }
  else if (numInt == 'Ò')
  {
    num = 104;
  }
  else if (numInt == 'Ù')
  {
    num = 105;
  }
  else if (numInt == 'Ý')
  {
    num = 106;
  }
  return num;
}
