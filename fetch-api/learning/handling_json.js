// It's a three step process => receive the JSON response, parse the JSON, and access the data

// example of a process of handling JSON

// step 1: recieving the JSON response
fetch('api url needing the data')
    // step 2: parse the JSON => use either parse() or .json() with fetch()
    .then(response => response.json())

    // step 3: access the data
    .then(data => console.log(data))