if (localStorage.getItem("ClassName") !== null) {
  $("body").addClass(localStorage.getItem('ClassName'))
  $(".logotipo img").attr("src", `img/logotipo-title-${localStorage.getItem('ClassName')}.png`)
} else {
  $("body").addClass("dark")
}

$("#themeButton").on("click",function() {
  if ($("body").hasClass('dark')) {
    $("body").removeClass("dark").addClass("light")
    localStorage.setItem('ClassName', 'light')
    $(".logotipo img").attr("src", "img/logotipo-title-light.png")
  } else {
    $("body").removeClass("light").addClass("dark")
    localStorage.setItem('ClassName', 'dark')
    $(".logotipo img").attr("src", "img/logotipo-title-dark.png")
  }
})