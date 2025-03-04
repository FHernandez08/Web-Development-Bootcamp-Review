function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            console.log("Rejecting due to invalid URL...")
            reject("Error: Invalid URL");
            return;
        }
        else {
            console.log("Valid URL, setting timeout...")
            setTimeout(() => {
                resolve(`Data fetched from ${url}`)
            }, 2000)
        }
    });
};

// testing
// fetchData("")  
//     .then(console.log)  
//     .catch(console.error); // Output: Error: Invalid URL  

fetchData("https://example.com")  
    .then(console.log)  
    .catch(console.error); // Output (after 2 sec): Data fetched from https://example.com 