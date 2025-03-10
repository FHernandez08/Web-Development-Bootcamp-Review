const userName = document.querySelector("#username");

const saveBtn = document.querySelector("#save-name");
const showBtn = document.querySelector("#show-name");
const clearBtn = document.querySelector("#clear-name");

const displayName = document.querySelector("#display-name");

saveBtn.addEventListener("click", () => {
  let userData = userName.value;
  localStorage.setItem("name", userData);
});

showBtn.addEventListener("click", () => {
  let storedName = localStorage.getItem("name");

  if (storedName) {
    displayName.textContent = `Saved Name: ${storedName}`;
  } else {
    displayName.textContent = "No name found!";
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  displayName.textContent = "";
});
