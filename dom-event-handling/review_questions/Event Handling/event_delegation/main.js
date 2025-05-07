const currList = document.querySelector("#myList");

function addListItem(text) {
  let listItem = document.createElement("li");
  listItem.textContent = text;

  currList.appendChild(listItem);
}

currList.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        console.log("List item clicked:", e.target.textContent);
    }
})