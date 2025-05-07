async function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received")
        }, 2000)
    })
}

// async already returns the promise, don't need await unless I need something to fully be executed before moving to the next line of code