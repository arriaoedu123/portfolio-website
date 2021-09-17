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

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})

toggleMode.addEventListener("click", () => {
	body.classList.toggle("light")
})

reveal()

window.addEventListener('scroll', reveal);
   function reveal() {
      var reveals = document.querySelectorAll('.typing-effect')
      var revealsImg = document.querySelectorAll('.image')

      for (var i = 0; i < reveals.length; i++) {

       var windowheight = window.innerHeight
       var revealtop = reveals[i].getBoundingClientRect().top

       if (revealtop < windowheight) {
        reveals[i].classList.add('active')
     }
   }

   for (var i = 0; i < revealsImg.length; i++) {

       var windowheight = window.innerHeight
       var revealtop = revealsImg[i].getBoundingClientRect().top

       if (revealtop < windowheight) {
        revealsImg[i].classList.add('load')
     }
   }

   if (window.scrollY < 200) {
      bottomBorder.style.top = "96px"
   } else {
      bottomBorder.style.top = "176px"
   }
}

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