// functionality for the weather app = make comments at every important part of the code
const searchBtn = document.querySelector('#search-button');

const weatherApi = "85cc60d3ab42f69355786efe014e8cce";

searchBtn.addEventListener("click", function() {
    const cityInput = document.querySelector('#search-bar').value;
    if (!cityInput){
        console.log("Please enter a city name.");
        return;
    }
    
    // stores the last input from user to local storage
    localStorage.setItem("user_searched_city", cityInput);


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityInput)}&appid=${weatherApi}&units=imperial`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response did NOT work');
        }
        return response.json();
    })
    .then((data) => {
        if (data.cod !== 200) {
            throw new Error("You have entered a non-existent city. Try Again!");
        }

        const cityName = data.name;
        const weatherDescription = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        const currTemp = data.main.temp;
        const currFeelLike = data.main.feels_like;

        const currWeatherDiv = document.createElement("div");
        currWeatherDiv.classList.add("current-weather-card");

        currWeatherDiv.innerHTML = `
        <h2 id="current-city">${cityName}</h2>
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="image for the current weather icon" id="current-weather-icon"/>
        <p id="current-temp">${currTemp}°F</p>
        <p id="weather-description">${weatherDescription}</p>
        <p id="curr-weather-feel">Feels like: ${currFeelLike}°F</p> 
        `;

        const weatherContainer = document.querySelector("#weather-container");
        weatherContainer.innerHTML = ""
        weatherContainer.appendChild(currWeatherDiv);
    })
    .catch(error => console.log('Error:', error));
})