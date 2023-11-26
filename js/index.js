// function Get Year of footer
const currentDate = new Date().getFullYear()
const yearElement = (document.getElementById(
  'year'
).innerHTML += `  ${currentDate} `)
