const person = {
  name: 'Hans Zimmer',
  age: 63,
  info: function(rating) {
    console.log(`${this.name} is musician`)
    console.log(`My rating - ${rating}`)
  }
}
person.info('Not Bad')


const yamaoka = {
  name: 'Akira Yamaoka'
}

const shields = {
  name: 'Kevin Shields'
}

person.info.bind(yamaoka, 'Incredible')()

person.info.bind(shields, 'Above the clouds')()

const holly = {
  name: 'Holly Henry'
}

person.info.call(holly, 'Heavenly voice')
