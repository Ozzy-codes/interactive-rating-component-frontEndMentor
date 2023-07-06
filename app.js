const myButton = document.querySelector("#myButton")
const ratingCard = document.querySelector(".ratingCard")
const submissionCard = document.querySelector(".submissionCard")

myButton.addEventListener("click", () => {
  ratingCard.classList.toggle("hide_display")
  submissionCard.classList.toggle("hide_display")
})
