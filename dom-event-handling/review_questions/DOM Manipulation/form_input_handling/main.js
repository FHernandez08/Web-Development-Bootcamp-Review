const userInput = document.querySelector("#userInput");
const selectBtn = document.querySelector("#select");

selectBtn.addEventListener("click", () => {
    let textSelected = userInput.value;
    
    let newElement = document.createElement("p");
    newElement.innerHTML = textSelected;

    document.body.appendChild(newElement);

    console.log(newElement);
})