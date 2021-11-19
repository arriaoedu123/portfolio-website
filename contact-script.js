(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

const sidebar = document.querySelector(".sidebar")
const menuBtn = document.querySelector(".menu-btn")
const body = document.querySelector("body")
const toggleMode = document.querySelector("#themeButton")
const textarea = document.querySelector(".textarea")

menuBtn.addEventListener("click", () => {

  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")

})

textarea.addEventListener("keyup", e => {

  textarea.style.height = "86px"
  let areaHeight = e.target.scrollHeight
  textarea.style.height = `${areaHeight}px`

})