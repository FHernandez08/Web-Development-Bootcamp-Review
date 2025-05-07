// Fetch and display random user data from https://randomuser.me/

fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))