const currList = document.querySelector("#myList");

function addListItem(text) {
    let listItem = document.createElement("li");
    listItem.textContent = text;

    currList.appendChild(listItem);
}

addListItem("Hello");
addListItem("Goodbye");
addListItem("Fidel Hernandez");
addListItem("Joe Burrow");