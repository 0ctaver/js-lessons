function comp(a, b = 2) {
  return a * b
}

// const comp2 = (a, b) => {return a * b}
const comp2 = (a, b) => a * b


const cube = a => a ** 3

const divTwo = a => a / 2

console.log(comp2(7, 7));
console.log(divTwo(20));
console.log(divTwo(84));

setTimeout(() => console.log('After 4.2 seconds'), 4200)
