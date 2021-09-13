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
let bottomBorder = document.querySelector(".bottom-border")

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})

toggleMode.addEventListener("click", () => {
	body.classList.toggle("light")
})

window.addEventListener("scroll", function(){

  if (window.scrollY == 0) 
     { scrollLine.classList.remove('animate') }
  if (window.scrollY > 0) 
     { scrollLine.classList.add('animate') }
  if (window.scrollY <=  50) 
     { bottomBorder.style.top = "6rem" }
  if (window.scrollY >= 102) 
     { bottomBorder.style.top = "11rem" }
  if ( window.scrollY >= 0 && window.scrollY <= 314)
     { titleText.classList.add('animate-title') }
  if (window.scrollY >= 102 && window.scrollY <= 731) 
     { mainProjectTitle.classList.add('animate-main') }
  if (window.scrollY >= 765 && window.scrollY <= 1393) 
     { recentPostsTitle.classList.add('animate-recent') }
  if (window.scrollY >= 1203 && window.scrollY <= 1829)
     { allJsTitle.classList.add('animate-all-js') }
  if (window.scrollY >= 1645 && window.scrollY <= 2265)
     { websitesTitle.classList.add('animate-web') }
})

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
});

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

});

if (window.scrollY <=  50)
   { bottomBorder.style.top = "6rem" }
if (window.scrollY >= 102) 
   { bottomBorder.style.top = "11rem" 
     scrollLine.classList.add('animate') }
if ( window.scrollY >= 0 && window.scrollY <= 314)
   { titleText.classList.add('animate-title') }
if (window.scrollY >= 102 && window.scrollY <= 731) 
   { mainProjectTitle.classList.add('animate-main') }
if (window.scrollY >= 765 && window.scrollY <= 1393) 
   { recentPostsTitle.classList.add('animate-recent') }
if (window.scrollY >= 1203 && window.scrollY <= 1829)
   { allJsTitle.classList.add('animate-all-js') }
if (window.scrollY >= 1645 && window.scrollY <= 2265)
   { websitesTitle.classList.add('animate-web') }