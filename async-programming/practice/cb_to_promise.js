function addedNumber(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function result(value) {
    let promise = new Promise((resolve, reject) => {
        if (value > 0) {
            console.log(`You have a positive number, ${value}`);
            resolve();
        }
        else {
            reject();
        }
    })
}