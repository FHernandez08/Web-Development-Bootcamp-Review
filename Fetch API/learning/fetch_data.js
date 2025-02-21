fetch('url-endpoint')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));


// fetch() with methods (option object as 2nd parameter)
fetch('url-endpoint', {method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))