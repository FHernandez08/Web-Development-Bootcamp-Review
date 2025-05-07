const allElements = document.querySelectorAll("a");

allElements.forEach(link => {
    link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("The link wasn't clicked as it was prevented.");
    });
})