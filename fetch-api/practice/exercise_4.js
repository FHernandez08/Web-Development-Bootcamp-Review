// Create a function that fetches data from a weather API (e.g., OpenWeatherMap)

function fetchWeatherData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("You have unauthorized access to this API!");
                } else if (response.status === 403) {
                    throw new Error("You don't have permission to access this portion of the API.");
                } else if (response.status === 404) {
                    handleHTTP404();
                    throw new Error("Resource not found.");
                } else if (response.status === 500) {
                    handleHTTP500();
                    throw new Error("Internal server error.");
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
            }
        }
        return response.json();
        })

        .then(data => console.log(data))
        .error(error => {
            console.log("Here's the error you received:", error)
        })
}