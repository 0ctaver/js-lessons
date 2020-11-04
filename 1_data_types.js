typeof undefined // "undefined"

typeof 11 // "number"

typeof 154444444444444444444444444444444444444444545253241424320n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

const cars = ["mazda", "bmw", "ford"]
cars[0] = "ferrari";
cars[cars.length] = "honda";
alert(typeof cars); // object

let x;

alert(x); // undefined = значение не было присвоено


let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string
value = Boolean(value);
alert(typeof value);

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

let admin;
let name;
name = "Джон";
admin = name;
alert(admin);
const COLOR_RED = "#F00";
alert(COLOR_RED);

const city = "Tokyo";
const number = 123;
const something = true;
let what;

console.log(typeof city);
console.log(typeof number);
console.log(typeof something);
console.log(typeof what);
console.log(null);




let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30,        // под ключом "age" хранится значение 30
	"likes birds": true
  languages: ["Ru", "Eng"]
};
user.isAdmin = true;

alert(user.isAdmin);
alert(user["likes birds"]);