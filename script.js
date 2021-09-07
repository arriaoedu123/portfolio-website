let sidebar = document.querySelector(".sidebar")
let closeBtn = document.querySelector("#btn")
let menuBtn = document.querySelector(".menu-btn")
let toggleBtn = document.querySelector(".toggle-theme")
let body = document.querySelector("body")
let scrollLine = document.querySelector(".scroll-line")

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active")
  body.classList.toggle("dark");
})

window.addEventListener("scroll", function(){
  scrollLine.classList.toggle('animate', window.scrollY > 0);
});
