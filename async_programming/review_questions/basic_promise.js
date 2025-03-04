function fetchData(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data fetched from ${url}`)
        }, 2000)
    })
};

fetchData("www.google.com").then(console.log)