const heading = document.getElementById('hello')
const headd = document.getElementById('hi')
console.log(headd.textContent)
const headdd = document.getElementById('sub-hello')
headd.textContent = 'some info'
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
const heading2 = document.querySelector('h2')
console.log(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]

function addStyle2(node, text) {
  node.style.color = 'black'
  node.style.backgroundColor = 'orange'
  node.style.padding = '2rem'
  node.style.textAlign = 'right'
  node.textContent = text
  node.style.width = '100%'
}

setTimeout(() => {
addStyle2(headdd, '1234');
}, 1000)


setTimeout(() => {
  addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Click on link', event.target.getAttribute('href'))
  const url = event.target.getAttribute('href')

  window.location = url
})


setTimeout(() => {
  addStylesTo(link, 'Практикуйся', 'blue', '1.5rem')
}, 3000)

setTimeout(() => {
  addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'black'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'

  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}


heading.onmouseenter = () => {
  if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
    heading.textContent = 'JS'
    title.textContent = 'JS'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
    heading.textContent = 'JavaScript'
    title.textContent = 'JavaScript'
  }
}

const title = document.querySelector('#title')
console.log(title)


heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'yellow') {
    heading2.style.color = '#000'
    heading2.style.backgroundColor = '#fff'
  } else {
    heading2.style.color = 'yellow'
    heading2.style.backgroundColor = '#000'
  }
})
