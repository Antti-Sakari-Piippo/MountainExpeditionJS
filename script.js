let hamburger = document.getElementById('hamburger')
let nav = document.getElementById('nav')
let menuItems = nav.querySelectorAll('ul a') // Select all navigation menu links

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open')
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true'
  hamburger.setAttribute('aria-expanded', !isExpanded)

  // Set focus to the first menu item when the menu is opened
  if (!isExpanded) {
    menuItems[0].focus()
  }
})

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
