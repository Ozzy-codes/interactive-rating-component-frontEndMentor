const selected_item_1 = document.querySelector("#selected_item_1")
const selected_item_2 = document.querySelector("#selected_item_2")
const selected_item_3 = document.querySelector("#selected_item_3")
const selected_item_4 = document.querySelector("#selected_item_4")
const selected_item_5 = document.querySelector("#selected_item_5")
const myButton = document.querySelector("#myButton")
const ratingCard = document.querySelector(".ratingCard")
const submissionCard = document.querySelector(".submissionCard")
const score_options = document.querySelector("#score_options")
const selected_score = document.querySelector("#selected_score")
const selected_item_array = [
  selected_item_1,
  selected_item_2,
  selected_item_3,
  selected_item_4,
  selected_item_5
]

for (let index = 0; index < selected_item_array.length; index++) {
  selected_item_array[index].addEventListener("click", function (event) {
    for (let index = 0; index < score_options.children.length; index++) {
      score_options.children[index].classList.remove("active")
      if (!score_options.children[index].classList.contains("item")) {
        score_options.children[index].classList.add("item")
      }
    }
    selected_item_array[index].classList.toggle("active")
    selected_item_array[index].classList.toggle("item")
  })
}

myButton.addEventListener("click", () => {
  if (
    selected_item_1.classList.contains("active") ||
    selected_item_2.classList.contains("active") ||
    selected_item_3.classList.contains("active") ||
    selected_item_4.classList.contains("active") ||
    selected_item_5.classList.contains("active")
  ) {
    ratingCard.classList.toggle("hide_display")
    submissionCard.classList.toggle("hide_display")
    for (let index = 0; index < score_options.children.length; index++) {
      if (score_options.children[index].classList.contains("active")) {
        return (selected_score.innerText = index + 1)
      }
    }
  } else {
    alert(
      "Please rate our service to continue, your feedback is greatly appreciated!"
    )
  }
})
