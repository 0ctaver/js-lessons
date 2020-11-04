/*
console.log(b)
var b = 42
console.log(b)

new1('some info')


function new1(text) {
  console.log(text)
}

const new2 = function new2(text) {
  const message = 'Hey' + text
  return function() {
  console.log(message)
  }
}     // Замыкание

const new3 = (text) => {console.log(text)}

const yess = new2(' you')
yess()


let result = []

for (var i = 0; i < 10; i++) {
  (function() {
    var j = i;
    result.push(function() {console.log(j) } )
  })()
}

result[2]()


const person = {
  surname: 'Старк',
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
  }
}

const john = {surname: 'Сноу'}

person.knows('все', 'Бран')


person.knows.call(john, 'ничего не', 'Джон');
const known0thing = person.knows.bind(john, 'ничего не', 'Джон');
known0thing()


function Person(name, age) {
   this.name = name
   this.age = age

   console.log(this)
}

Person.prototype.voice = function() {
  console.log(`Person ${this.name} says nyaaa`)
}

const alina = new Person('Rei', 19)
console.log(Person.prototype)
alina.voice()


const first = () => {console.log('Ichi')}
const second = () => {console.log('Ni')}
const third = () => {console.log('San')}

first() // отправляется в call stack, потом он обнуляется
setTimeout(second, 0) // когда setTimeout обрабатывается на стороннем api, потом возвращается
third() // отправляется в call stack, потом он обнуляется


const searchers = [
  ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
  ["Mawson", "South Pole", "New Hebrides"],
  ["Hillary", "Everest", "South Pole"]
];

function getToponim(arr) {
  const allPoints = arr.reduce((acc, item) => {
    acc = [...acc, ...item.slice(1)];
    acc = Array.of(...new Set(acc))
    return acc;
  }, []);

  const res = allPoints.map((point) => {
    const searchersOnPoint = [];
    searchers.forEach((searcher) => {
      if (searcher.includes(point)) searchersOnPoint.push(searcher[0])
    })
    return [point, ...searchersOnPoint]
  })

  return res;
}


function Mobile(name, memory, camera) {
  this.name = name;
  this.memory = memory;
  this.camera = camera;
  document.write(`У смартфона ${name} ${memory} памяти и камера ${camera}.`)
}

new Mobile('Meizu Note 8', '64GB', 'Sony');

class Mobile1 {
  constructor(name, memory, camera) {
  this.name = name;
  this.memory = memory;
  this.camera = camera;
}
  info () {document.write(`У смартфона ${this.name} ${this.memory} памяти и камера ${this.camera}.`)}
}


let meizu = new Mobile1('Meizu Note 8', '64GB', 'Sony');
meizu.info();

const person = {
  name: 'Ikari',
  age: 17,
  logInfo: function(job) {
    console.log(`${this.name} is Baka`)
    console.log(`Job is ${job}`)
  }
}

const asuka = {
  name: 'Asuka'
}

person.logInfo.bind(asuka, 'eva pilot')()



function calcFunc(number) {
     return function() {
       console.log(1000 * number)
  }
}

const calc = calcFunc(4)
calc()


function divideNumbers(n) {
  return function(num) {
    return num / n
  }
}

const divideByTwo = divideNumbers(2)
console.log(divideByTwo(20))



function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args)
  }
}


function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}


const person1 = {name: 'Sasha', age: 27, job: 'actress'}

bind(person1, logPerson)();
document.write('Peace!' + '<br>');
document.write('Love!');




console.log('request data...')
setTimeout(() => {
  console.log('preparing data...')

  const Data = {
    server: 'aws',
    port: 4000
  }
  setTimeout(() => {
    Data.modified = true
    console.log('data recieved', Data)
  }, 2000)

}, 2000)
*/
/*
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('preparing data')
    const Data = {
      server: 'aws',
      port: 4000
    }
    resolve(Data)
  }, 2000)
})

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    }, 2000)
  })
}).then(clientData => {
  console.log('data recieved', clientData)
})
*/

/*
const person = Object.create({
  calculateAge() {
    console.log('Age', new Date().getFullYear() - this.birthYear)
  }
},
 {
  name: {
    value: 'Art',
    enumerable: true,
    writable: true,
    configurable: true
  },
   birthYear: {
     value: 1995
   },
   age: {
     get() {
       return new Date().getFullYear() - this.birthYear
       // срабатывает при чтении
     },
     set(value) {
       document.body.style.background = 'red'
       console.log('set age', value)
       // срабатывает при записи
     }
   }
})

person.name = 'Max'

for(let key in person) {
  if (person.hasOwnProperty(key)) {
  console.log('Key', key, person[key])
}
}
*/
// классы

//const star = {
//  name: 'Sun',
//  galaxy: 'Milky Way',
//  age: 4500000000
// }

class Star {
  static type = 'STAR'


  constructor(options) {
    this.name = options.name
    this.galaxy = options.galaxy
    this.age = options.age
}
    meaning() {
      console.log('I AM THE STAR')

  }
}
/*
const star = new Star({
  name: 'Sun',
  galaxy: 'Milky Way',
  age: 4500000000
})
*/
class milkyWayStar extends Star {
  constructor(options) {
    super(options)
    this.lifeExists = options.lifeExists
  }
  meaning() {
    super.meaning()
    console.log('I AM THE SUN')
  }

get ageInfo() {
  return this.age / 1000000000
}

set ageInfo(newAge) {
  this.age = newAge
}
}

const sun = new milkyWayStar({
  name: 'Sun',
  galaxy: 'Milky Way',
  age: 4500000000,
  lifeExists: 'Life Exists, Planet Earth'
})
