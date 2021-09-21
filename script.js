let sidebar = document.querySelector(".sidebar")
let menuBtn = document.querySelector(".menu-btn")
let toggleBtn = document.querySelector(".toggle-theme")
let body = document.querySelector("body")
let titleText = document.querySelector(".title-text")
let scrollLine = document.querySelector(".scroll-line-div")
let toggleMode = document.querySelector("#themeButton")
let mainProjectTitle = document.querySelector(".main-project-title")
let recentPostsTitle = document.querySelector(".recent-posts-title")
let allJsTitle = document.querySelector(".all-js-title")
let websitesTitle = document.querySelector(".websites-title")
let bottomBorder = document.querySelector(".left-border")
let reveals = document.querySelectorAll('.typing-effect')
let revealsImg = document.querySelectorAll('.image')

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})

const reveal = () => {

  for (let i = 0; i < reveals.length; i++) {

    let windowheight = window.innerHeight
    let revealTop = reveals[i].getBoundingClientRect().top

    if (revealTop < windowheight) {
      reveals[i].classList.add('active')
    }

  }

  for (let i = 0; i < revealsImg.length; i++) {

    let windowheight = window.innerHeight
    let revealTopImg = revealsImg[i].getBoundingClientRect().top

    if (revealTopImg < windowheight) {
      revealsImg[i].classList.add('active')
    }

  }

  if (window.scrollY < 200) {
    bottomBorder.style.top = "96px"
  } else {
    bottomBorder.style.top = "176px"
  }
}

reveal()
window.addEventListener('scroll', reveal)

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
   0:{
     items:1,
     nav: true
   },
   600:{
     items:2,
     nav: false
   },
   1000:{
     items:3,
     nav: false
   }
 }
})

$(".carousel-website").owlCarousel({
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  items: 1,
  itemsDesktop: false,
  itemsDesktopSmall: false,
  itemsTablet: false,
  itemsMobile: false

})

if (localStorage.getItem("ClassName") !== null) {
  $("body").addClass(localStorage.getItem('ClassName'))
} else {
  $("body").addClass("dark")
}

$("#themeButton").on("click", function() {
  if ($("body").hasClass('dark')) {

    $("body").removeClass("dark").addClass("light")
    localStorage.setItem('ClassName', 'light')

  } else {

    $("body").removeClass("light").addClass("dark")
    localStorage.setItem('ClassName', 'dark')

  }
})