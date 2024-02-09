const selectField = document.getElementById("selectField");
const arrowImg = document.getElementById("arrowImg");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const textField = document.getElementById("textField");
selectField.addEventListener("click", (e) => {
  arrowImg.classList.toggle("upperSideArrow");
  ul.classList.toggle("showMenu");
});

li.forEach((item) => {
  item.addEventListener("click", () => {
    textField.innerText = item.innerText;
    arrowImg.classList.remove("upperSideArrow");
    ul.classList.remove("showMenu");
  });
});
