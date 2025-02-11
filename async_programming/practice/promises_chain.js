function numberGame() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 3000);
    })
    .then((randomNumber) => {
        console.log(`The random number selected is ${randomNumber}!`);
        return (randomNumber * 3);
    })
    .then((number) => {
        console.log(`The current number is ${number}!`);
        console.log(`The number when added by 5 is: ${number + 5}`);
    })
    .then((finalNumber) => {
        console.log(`Congrats! You finished the game, with the number of ${finalNumber}.`)
    })
}

numberGame();