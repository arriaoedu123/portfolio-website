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



menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtn.classList.toggle("open")
})

if (localStorage.getItem("ClassName") !== null) {
  $("body").addClass(localStorage.getItem('ClassName'))
} else {
  $("body").addClass("dark")
}

$("#themeButton").on("click",function() {
  if ($("body").hasClass('dark')) {

    $("body").removeClass("dark").addClass("light")
    localStorage.setItem('ClassName', 'light')

  } else {

    $("body").removeClass("light").addClass("dark")
    localStorage.setItem('ClassName', 'dark')

  }
})