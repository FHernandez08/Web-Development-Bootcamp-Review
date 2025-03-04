function processData(url) {
    fetchData(url)
        .then(data => {
            const processedData = data + " - Processed"
            console.log(processedData);
        })
        .catch(error => console.log(error));
}

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data["title"])
}

processData("https://jsonplaceholder.typicode.com/todos/1");