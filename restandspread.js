// rest
function average(a, b, ...args) {
  return args.reduce((acc, i) => acc += i, 0) / args.length
}

console.log(average(10, 20, 40, 60))

// spread
//const array = [1, 2, 3, 5, 8, 13]
//console.log(...array)
//console.log(Math.max(...array))
//console.log(Math.min(...array))

//const fib = [1, ...array]
//console.log(fib)

// Destructoring
const array = [1, 2, 3, 5, 8, 13]
// const a = array[0]
// const b = array[1]
const [a,, c] = array
console.log(a, c)


const address = {
  country: 'Russia',
  city: 'Moscow',
  street: 'Bolotnaya'
}

const newAddress = {...address, street: 'Tverskaya', whatKevinSaid: 'How does it feel?'}

console.log(newAddress)
