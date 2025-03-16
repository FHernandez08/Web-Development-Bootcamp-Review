// functionality for the weather app = make comments at every important part of the code
const cityInput = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#search-button');

let weatherApi = "85cc60d3ab42f69355786efe014e8cce";

fetch(weatherApi)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error))