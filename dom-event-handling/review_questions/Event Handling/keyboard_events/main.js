const inputValue = document.querySelector("#inputValue");

inputValue.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        console.log("Enter key pressed");
    }
})