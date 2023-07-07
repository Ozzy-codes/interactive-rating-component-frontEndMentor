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

selected_item_1.addEventListener("click", function (event) {
  selected_item_1.classList.toggle("active")
  selected_item_1.classList.toggle("item")
  selected_item_2.classList.remove("active")
  selected_item_3.classList.remove("active")
  selected_item_4.classList.remove("active")
  selected_item_5.classList.remove("active")
  if (!selected_item_2.classList.contains("item")) {
    selected_item_2.classList.add("item")
  }
  if (!selected_item_3.classList.contains("item")) {
    selected_item_3.classList.add("item")
  }
  if (!selected_item_4.classList.contains("item")) {
    selected_item_4.classList.add("item")
  }
  if (!selected_item_5.classList.contains("item")) {
    selected_item_5.classList.add("item")
  }
})
selected_item_2.addEventListener("click", function (event) {
  selected_item_2.classList.toggle("active")
  selected_item_2.classList.toggle("item")
  selected_item_1.classList.remove("active")
  selected_item_3.classList.remove("active")
  selected_item_4.classList.remove("active")
  selected_item_5.classList.remove("active")
  if (!selected_item_1.classList.contains("item")) {
    selected_item_1.classList.add("item")
  }
  if (!selected_item_3.classList.contains("item")) {
    selected_item_3.classList.add("item")
  }
  if (!selected_item_4.classList.contains("item")) {
    selected_item_4.classList.add("item")
  }
  if (!selected_item_5.classList.contains("item")) {
    selected_item_5.classList.add("item")
  }
})
selected_item_3.addEventListener("click", function (event) {
  selected_item_3.classList.toggle("active")
  selected_item_3.classList.toggle("item")
  selected_item_2.classList.remove("active")
  selected_item_1.classList.remove("active")
  selected_item_4.classList.remove("active")
  selected_item_5.classList.remove("active")
  if (!selected_item_2.classList.contains("item")) {
    selected_item_2.classList.add("item")
  }
  if (!selected_item_1.classList.contains("item")) {
    selected_item_1.classList.add("item")
  }
  if (!selected_item_4.classList.contains("item")) {
    selected_item_4.classList.add("item")
  }
  if (!selected_item_5.classList.contains("item")) {
    selected_item_5.classList.add("item")
  }
})
selected_item_4.addEventListener("click", function (event) {
  selected_item_4.classList.toggle("active")
  selected_item_4.classList.toggle("item")
  selected_item_2.classList.remove("active")
  selected_item_3.classList.remove("active")
  selected_item_1.classList.remove("active")
  selected_item_5.classList.remove("active")
  if (!selected_item_2.classList.contains("item")) {
    selected_item_2.classList.add("item")
  }
  if (!selected_item_3.classList.contains("item")) {
    selected_item_3.classList.add("item")
  }
  if (!selected_item_1.classList.contains("item")) {
    selected_item_1.classList.add("item")
  }
  if (!selected_item_5.classList.contains("item")) {
    selected_item_5.classList.add("item")
  }
})
selected_item_5.addEventListener("click", function (event) {
  selected_item_5.classList.toggle("active")
  selected_item_5.classList.toggle("item")
  selected_item_2.classList.remove("active")
  selected_item_3.classList.remove("active")
  selected_item_4.classList.remove("active")
  selected_item_1.classList.remove("active")
  if (!selected_item_2.classList.contains("item")) {
    selected_item_2.classList.add("item")
  }
  if (!selected_item_3.classList.contains("item")) {
    selected_item_3.classList.add("item")
  }
  if (!selected_item_4.classList.contains("item")) {
    selected_item_4.classList.add("item")
  }
  if (!selected_item_1.classList.contains("item")) {
    selected_item_1.classList.add("item")
  }
})

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
