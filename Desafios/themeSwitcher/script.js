const ball = window.document.querySelector('.ball')
const body = window.document.querySelector('body')

ball.addEventListener("click", changeTheme)

function changeTheme() {
  const light = window.document.querySelector('.light')

  if (light) {
    body.removeAttribute("class")
    body.classList.add("dark")
    ball.style = "margin-left: 100px"
  } else {
    body.removeAttribute("class")
    body.classList.add("light")
    ball.style = "margin-left: 0px"
  }
  
}