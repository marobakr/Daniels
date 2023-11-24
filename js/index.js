// change Position & bg for Nav
window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset
  let navBar = document.querySelector('nav')
  if (verticalScrollPx < 300) {
    navBar.classList.add('not-scrolling')
    navBar.classList.remove('scrolling')
  } else if (verticalScrollPx > 300 && verticalScrollPx < 1000) {
    navBar.classList.add('scrolling')
    navBar.classList.remove('not-scrolling')
  }
})

// function Get Year of footer
const currentDate = new Date().getFullYear()
const yearElement = (document.getElementById(
  'year'
).innerHTML += `  ${currentDate} `)

/* Scroll to top button */
const button = document.querySelector('.scrollToTopBtn')

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)

    if (window.scrollY > 100) {
      button.style.display = 'block'
    } else {
      button.style.display = 'none'
    }
  })
}
const scrollToTop = () => {
  button.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    console.log(event)
  })
}

displayButton()
scrollToTop()

// Counter Timing
const Counter = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY >= 2500 && window.scrollY <= 2550) {
      // COunter Timer
      var counters = document.getElementsByClassName('counterTimer')

      for (var i = 0; i < counters.length; i++) {
        handleCounter(counters[i])
      }
      function handleCounter(counter) {
        var c = 0
        var interval = setInterval(() => {
          if (c == counter.dataset.count) {
            clearInterval(interval)
          }
          counter.innerText = c
          c++
        }, 2)
      }
    }
  })
}
Counter()
