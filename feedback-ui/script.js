const ratingEls = document.querySelectorAll(".rating")
const btnEl = document.getElementById("btn")
console.log(ratingEls)
const containerEl = document.getElementById("container")

let selectedRating = ""

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive()
    selectedRating = event.target.innerText || event.target.parentNode.innerText
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")

    // console.log(event.target.innerText || event.target.parentNode.innerText)
  })
})

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `
  }
})

function removeActive() {
  ratingEls.forEach((rating) => {
    rating.classList.remove("active")
  })
}
