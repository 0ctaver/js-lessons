
const num = 42;
const float = 42.42;
const pow = 10e3;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN); // Not A Number
const weird = 2 / undefined;
console.log(Number.isNaN(weird));
console.log(Number.isNaN(42));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(42));

const stringInt = 40;
const stringFloat = 40.42;
console.log(Number.parseInt(stringInt) + 2) // преобразование в int
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+(stringInt) + 2)

console.log(Number.parseFloat(stringFloat) + 2) // преобразование в float
console.log(+(0.2 + 0.5).toFixed(1)) // обрезает fixed

console.log(-4444444444444444444444444444444444444444444444444444n - -444444444444444444444444444444444444445353535n);
// console.log(-4444444444444444444444444444444444444444444444444444.535353n); error


// Объект Math
console.log(Math.PI)
console.log(Math.sqrt(25)) // извлечь корень
console.log(Math.pow(4, 2)) // возвести в степень
console.log(Math.max(4, 2))
console.log(Math.min(4, 2))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1)) // метод ceil округляет в большую сторону
console.log(Math.round(4.1))
console.log(Math.trunc(4.1))
console.log(Math.random())

function getRandomBetween(min, max) {
	return Math.floor (Math.random() * (max - min + 1) + min)
}

console.log (getRandomBetween(10, 42));