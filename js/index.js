// change bg and text color for links
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a')
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY
    var scrollThreshold = 200

    links.forEach(function (link) {
      if (scrollPosition > scrollThreshold) {
        link.classList.add('text-black', 'psoudo-black')
        link.classList.remove('text-white', 'psoudo-white')
      } else {
        link.classList.add('text-white', 'psoudo-white')
        link.classList.remove('text-black', 'psoudo-black')
      }
    })
  })
})
// change bg nav scrolling
window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset
  let navBar = document.querySelector('nav')
  if (verticalScrollPx < 200) {
    navBar.classList.remove('bg-white', 'shadow',)
  } else if (verticalScrollPx > 200 && verticalScrollPx < 1000) {
    navBar.classList.add('bg-white', 'shadow')
  }
})
// Select Skills Selector
let ourSkills = document.querySelector('.skills')

  window.onscroll = function () {
  //Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  //Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;

  //window ScrollTop
  let windowScrollTop = window.scrollY

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {

    let allSkills = document.querySelectorAll(
      '.progresspars .progress .progress-bar '
    )
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }

}
// function Get Year of footer
const currentDate = new Date().getFullYear()
const yearElement = (document.getElementById(
  'year'
).innerHTML += `  ${currentDate} `)

/* Scroll to top button */
const button = document.querySelector('.scrollToTopBtn')

const displayButton = () => {
  window.addEventListener('scroll', () => {
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
