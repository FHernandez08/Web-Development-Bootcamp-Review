const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".tab-content div");

function switchTab(event) {
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    event.target.classList.add("active");

    const targetTab = event.target.getAttribute("data-tab");
    document.getElementById(targetTab).classList.add("active");
}

tabs.forEach(tab => {
    tab.addEventListener("click", switchTab);
});