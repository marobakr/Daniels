const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
  window.scrollY >= 500
    ? nav.classList.add('navbar-scrolled', 'shadow')
    : window.scrollY < 500 && nav.classList.remove('navbar-scrolled', 'shadow')
})
let ourSkills = document.querySelector('.skills')
window.onscroll = function () {
  let e = ourSkills.offsetTop,
    o = ourSkills.offsetHeight,
    t = this.innerHeight
  if (window.scrollY > e + o - t) {
    document
      .querySelectorAll('.progresspars .progress .progress-bar ')
      .forEach((e) => {
        e.style.width = e.dataset.progress
      })
  }
}
const currentDate = new Date().getFullYear(),
  yearElement = (document.getElementById(
    'year'
  ).innerHTML += `  ${currentDate} `),
  button = document.querySelector('.scrollToTopBtn'),
  displayButton = () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100
        ? (button.style.display = 'block')
        : (button.style.display = 'none')
    })
  },
  scrollToTop = () => {
    button.addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' }), console.log(event)
    })
  }
window.addEventListener('scroll', () => {
  window.scrollY > 100
    ? (button.style.display = 'block')
    : (button.style.display = 'none')
}),
  button.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' }), console.log(event)
  })
const Counter = () => {
  window.addEventListener('scroll', () => {
    if (
      (console.log(window.scrollY),
      window.scrollY >= 2500 && window.scrollY <= 2550)
    ) {
      for (
        var e = document.getElementsByClassName('counterTimer'), o = 0;
        o < e.length;
        o++
      )
        t(e[o])
      function t(e) {
        var o = 0,
          t = setInterval(() => {
            o == e.dataset.count && clearInterval(t), (e.innerText = o), o++
          }, 2)
      }
    }
  })
}
window.addEventListener('scroll', () => {
  if (
    (console.log(window.scrollY),
    window.scrollY >= 2500 && window.scrollY <= 2550)
  ) {
    for (
      var e = document.getElementsByClassName('counterTimer'), o = 0;
      o < e.length;
      o++
    )
      t(e[o])
    function t(e) {
      var o = 0,
        t = setInterval(() => {
          o == e.dataset.count && clearInterval(t), (e.innerText = o), o++
        }, 2)
    }
  }
})
