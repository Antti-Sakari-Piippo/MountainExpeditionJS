let hamburger = document.getElementById('hamburger')
let nav = document.getElementById('nav')

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open')
  let newMenuOpenStatus = !menuOpen
  menuToggle.setAttribute('aria-expanded', newMenuOpenStatus)
})
