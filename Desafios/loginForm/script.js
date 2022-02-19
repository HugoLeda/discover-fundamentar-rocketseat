let divCheck = document.querySelector(".input-check div:first-child")
let eyePass = document.querySelector("#password ~ img")
let p = document.querySelector("button ~ p > a")
let spanPass = document.querySelector(".input-check > span")

divCheck.addEventListener("click", fill)
eyePass.addEventListener("click", changeVisibilty)
p.addEventListener("mouseenter", underline)
p.addEventListener("mouseleave", notUnderline)
spanPass.addEventListener("mouseenter", underline)
spanPass.addEventListener("mouseleave", notUnderline)

function fill() {    
  if (divCheck.classList.length > 0) {
    divCheck.removeAttribute("class")
  } else {
    divCheck.classList.add("checked")  
  }
}

function changeVisibilty() {
  let inputPass = document.querySelector(`input[type="password"]`)
  let input = document.querySelector("#password")

  if (inputPass) {
    input.type = "text"
    input.focus()
  } else {
    input.type = "password"
    input.focus()
  }
}

function underline() {
  this.style = "text-decoration: underline;"
}

function notUnderline() {
  this.style = "text-decoration: none;"
}