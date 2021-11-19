const sidebar = document.querySelector(".sidebar")
const menuBtn = document.querySelector(".menu-btn")
const toggleBtn = document.querySelector(".toggle-theme")
const body = document.querySelector("body")
const titletext = document.querySelector(".title-text")
const scrollLine = document.querySelector(".scroll-line-div")
const toggleMode = document.querySelector("#themeButton")
const mainProjectTitle = document.querySelector(".main-project-title")
const recentPostsTitle = document.querySelector(".recent-posts-title")
const allJsTitle = document.querySelector(".all-js-title")
const websitesTitle = document.querySelector(".websites-title")
const leftBorder = document.querySelector(".left-border")
const reveals = document.querySelectorAll('.typing-effect')
const revealsImg = document.querySelectorAll('.image')
const home = document.querySelector(".home")
const projects = document.querySelector(".projects")

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})

const reveal = () => {
  const homePos = document.querySelector(".home").getBoundingClientRect()
  const homeTop = homePos.top

  const projectsPos = document.querySelector(".projects").getBoundingClientRect()
  const projectsTop = projectsPos.top

  for (let i = 0; i < reveals.length; i++) {

    let windowheight = window.innerHeight - 80
    let revealTop = reveals[i].getBoundingClientRect().top

    if (revealTop < windowheight) {
      reveals[i].classList.add('active')
    }

  }

  for (let i = 0; i < revealsImg.length; i++) {

    let windowheight = window.innerHeight - 20
    let revealTopImg = revealsImg[i].getBoundingClientRect().top

    if (revealTopImg < windowheight) {
      revealsImg[i].classList.add('active')
    }

  }

    if (window.scrollY < 120) {
      leftBorder.style.top = `${homeTop}px`
      home.classList.add('active')
      projects.classList.remove('active')
    }
    else { 
      leftBorder.style.top = `${projectsTop}px`
      projects.classList.add('active')
      home.classList.remove('active')
    }

    if (window.scrollY == 0) {
      scrollLine.classList.remove('animate')
    } else {
      scrollLine.classList.add('animate')
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
