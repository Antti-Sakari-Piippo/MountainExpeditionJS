const menuToggle = document.getElementById('hamburger')
const menu = document.querySelector('.menu')

function toggleMenu() {
  menu.classList.toggle('close')
  const isClose = menu.classList.contains('close')
  menuToggle.setAttribute('aria-expanded', isClose.toString())

  if (isClose) {
    // Set focus to the first menu item when the menu is opened
    const firstMenuItem = menu.querySelector('ul li:first-child a')
    if (firstMenuItem) {
      firstMenuItem.focus()
    }
  }
}

function closeMenu() {
  menu.classList.remove('close')
  menuToggle.setAttribute('aria-expanded', 'false')
}

menuToggle.addEventListener('click', toggleMenu)

function checkScreenWidth() {
  if (window.innerWidth > 1000) {
    closeMenu()
  }
}

window.addEventListener('resize', checkScreenWidth)

checkScreenWidth()

////////////////////////////////
let scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }
let elementsToShow = document.querySelectorAll('.show-on-scroll')

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible')
    } else {
      element.classList.remove('is-visible')
    }
  })

  scroll(loop)
}

loop()

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect()
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  )
}

// Animate images to gone from left and right
const animatedImages = document.querySelectorAll('.animated-element')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const direction = entry.target.classList.contains('left')
        ? 'left'
        : 'right'
      const transformValue =
        direction === 'left' ? 'translateX(0)' : 'translateX(0)'
      entry.target.style.transform = transformValue
      observer.unobserve(entry.target)
    }
  })
})

animatedImages.forEach((image) => {
  observer.observe(image)
})
//

// Animate appear
const appear = document.querySelectorAll('.appear')

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      observer2.unobserve(entry.target)
    }
  })
})

appear.forEach((element) => {
  observer2.observe(element)
})

// Get current year for copyright text
const yearElement = document.getElementById('currentYear')
const currentYear = new Date().getFullYear()
yearElement.innerText = `Copyright © ${currentYear} Mountain Expedition`
