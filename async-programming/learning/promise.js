// Creating promises
function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.8;
            
            if (success) {
                resolve("Operation successful!");
            }

            else {
                reject("Operation failed!");
            }
        }, 1000);
    });
}

myAsyncFunction()
.then((result) => {
    console.log("Success:", result);
})
.catch((error) => {
    console.error("Error:", error);
})
.finally(() => {
    console.log("Operation complete.");
});