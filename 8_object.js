const job = 'Music'

const person = {
  age: 27,
  name: 'Kurt',
  //job: job,
  job,
  print: () => 'Cut yourself',
  'country-live': 'USA',
  toString: function() {
    return Object
    .keys(this)
    .filter(key => key !== 'toString')
    .map(key => this[key])
    .join(' ')
  }
}

console.log(person)

//Methods
const first = {a: 1}
const second = {b: 2}

console.log(Object.is(20, 20))
const obj = Object.assign({}, first, second, {c: 5})
console.log(first)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
