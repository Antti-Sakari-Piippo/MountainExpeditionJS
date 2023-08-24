let hamburger = document.getElementById('hamburger')
let nav = document.getElementById('nav')
let menuItems = nav.querySelectorAll('ul a') // Select all navigation menu links

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open')
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true'
  hamburger.setAttribute('aria-expanded', !isExpanded)
  nav.classList.toggle('active')

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
