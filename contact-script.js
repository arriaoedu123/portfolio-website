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

let sidebar = document.querySelector(".sidebar")
let menuBtn = document.querySelector(".menu-btn")
let body = document.querySelector("body")
let toggleMode = document.querySelector("#themeButton")

toggleMode.addEventListener("click", () => {
  body.classList.toggle("light")
})

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})