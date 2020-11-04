//Тип имеет значение
let arg = prompt("Сколько яблок?");
switch (arg) {
  case '0': // (*) группируем оба case
  case '1':
    alert( 'ONE or Null' );
    break;

  case '2':
    alert( 'NI' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}