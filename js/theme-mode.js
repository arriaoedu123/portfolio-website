
if (localStorage.getItem("ClassName") !== null) {
  if (sessionStorage.getItem('ClassName') !== null) {
    localStorage.setItem('ClassName', sessionStorage.getItem('ClassName'))
  }
  sessionStorage.setItem('ClassName', localStorage.getItem('ClassName'))
  $("body").addClass(sessionStorage.getItem('ClassName'))
} else {
  $("body").addClass("dark")
}

$("#themeButton").on("click",function() {
  if ($("body").hasClass('dark')) {

    $("body").removeClass("dark").addClass("light")
    localStorage.setItem('ClassName', 'light')
    sessionStorage.setItem('ClassName', 'light')
    themeColor = localStorage.getItem('ClassName') 

  } else {

    $("body").removeClass("light").addClass("dark")
    localStorage.setItem('ClassName', 'dark')
    sessionStorage.setItem('ClassName', 'dark')
    themeColor = localStorage.getItem('ClassName')

  }

  console.log(themeColor)
})