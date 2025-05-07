// Promise.all() makes sure to return the callback if ALL promises fulfills
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "resolved");
});

const promise2 = 93;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "resolved2");
})

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((err) => {
        console.log(err)
    });
