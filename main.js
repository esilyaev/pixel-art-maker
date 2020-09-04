let COLOR = "col"

const redbrush = document.querySelector(".red-brush")
redbrush.addEventListener("click", () => {
  COLOR = "col red"
})

const bluebrush = document.querySelector(".blue-brush")
bluebrush.addEventListener("click", () => {
  COLOR = "col blue"
})



const square = document.querySelectorAll(".col")
square.forEach((el) => {
  el.addEventListener("click", (event) => {
    el.className = COLOR
  })
})