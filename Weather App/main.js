// functionality for the weather app = make comments at every important part of the code
const searchBtn = document.querySelector('#search-button');

let weatherApi = "85cc60d3ab42f69355786efe014e8cce";

searchBtn.addEventListener("click", function() {
    const cityInput = document.querySelector('#search-bar').value;
    if (!cityInput){
        console.log("Please enter a city name.");
        return;
    }


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityInput)}&appid=${weatherApi}&units=imperial`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response did NOT work');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
})