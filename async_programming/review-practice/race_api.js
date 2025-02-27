const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())

const promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())


Promise.race([promise1, promise2])
    .then(value => console.log(value))
    .catch(error => console.log('Promises have made an error:', error))