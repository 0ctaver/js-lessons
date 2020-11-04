/*let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( "Правильно!" );
  alert( "Вы такой умный!" );
}
else {
  alert( "BAKA!" );
}

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
*/
/*
let money = prompt('Сколько стоит люстра?');

if (money < 1000000) {
alert ("Это недорого")
}
else {
  alert ("Это дорого");
}
*/

let apples = prompt('Сколько яблок?');

if (apples < 4) {
alert ("Это мало");
document.write("<img src=\"https://acegif.com/wp-content/gifs/fish-62.gif\" width=\"800\" height=\"420\"></img>");
}
else if (apples > 10000 && apples < 1000000) {
  alert ("ОГО ВОТ ЭТО ДА");
  document.write("<img src=\"https://i.gifer.com/Uqm.gif\"></img>");
}
else if (apples > 1000000) {
  alert ("Крутой ты!");
  document.write("<img src=\"https://acegif.com/wp-content/gifs/fish-54.gif\"></img>");
  }
else {
  alert ("Это много");
}