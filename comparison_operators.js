
//Операторы сравнения возвращают значения логического типа.

document.write( 2 > 1 );  // true (верно)   знак Больше
document.write("<br>");
document.write( 4 >= 2 );  // true (верно)   знак Больше или равно. меньше или равно <=
document.write("<br>");
document.write( 2 == 1 ); // false (неверно)  Равно. для сравнения == для присваивания =
document.write("<br>");
document.write( 2 != 1 ); // true (верно)  Не равно.
document.write("<br>");

//Сравнение строк. Используется кодировка Unicode, а не настоящий алфавит
//Строки сравниваются посимвольно в лексикографическом порядке.

document.write( 'Я' > 'А' ); // true
// document.write("ананас" > "яблоко"); // → false
//alert( 'Кот' > 'Код' ); // true
document.write("<br>");

//Сравнение разных типов при сравнении приводятся к числу
document.write( '01' == 1 ); //true - 01 преобразуется в 1. true в 1, false в 0.
document.write("<br>");

//Строгое сравнение === проверяет равенство без приведения типов. Учитывает тип.
document.write( 0 == false ); // true
document.write( 0 === false ); // false
document.write( null === undefined ); // false
document.write( null == undefined ); // true
document.write( null == 0 ); // (2) false. сравнение undefined с 0 всегда ложно, с Null почти всегда, кроме >= <=
document.write( "2">"12" ); // true, т.к. это строки, сравниваются посимвольно, 2>1