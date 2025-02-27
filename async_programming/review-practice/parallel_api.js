const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())

const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(response => response.json())

Promise.all([promise1, promise2])
    .then(values => console.log(values))
    .catch(error => console.log('Error:', error))