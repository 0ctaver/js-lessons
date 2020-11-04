const title = 'Hi'

const isVisible = () => Math.random() > 0.5

const template = `
${isVisible() ? `<p>Visible</p>` : ''}
<h1 style="color: red">${title}</h1>
`

document.write(template)

//Methods
const str = 'Hello'

console.log(str.startsWith('H'))
console.log(str.startsWith('t'))
console.log(str.endsWith('o'))
console.log(str.includes('ello'))
console.log(str.repeat(5))

//удаление пробелов
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())

//устанавливает минимальную длину строки и можно добавить чем заполнить
console.log(str.padStart(10, '1234'))
console.log(str.padEnd(8, 'abc'))
