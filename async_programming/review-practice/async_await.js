async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if (!response.ok) {
            throw new Error(`HTTP error found! Status code: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Caught error:', error.message);
    }
}

getData();