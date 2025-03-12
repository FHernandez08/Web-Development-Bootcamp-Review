const saveBtn = document.querySelector(".save");
const themeSelection = document.querySelector("#theme");
const fontSelection = document.querySelector("#font-size");

saveBtn.addEventListener("click", () => {
    let themeChoice = themeSelection.value;
    let fontChoice = fontSelection.value;

    localStorage.setItem("theme", themeChoice);
    localStorage.setItem("font", fontChoice);
})

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const savedFont = localStorage.getItem("font");

    if (savedTheme) {
        themeSelection.value = savedTheme;
    }

    if (savedFont) {
        fontSelection.value = savedFont;
    }
}