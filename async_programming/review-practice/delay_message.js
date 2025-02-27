function delayMessage(message, delay) {
    setTimeout(() => {
        console.log(message)
    }, delay);
};

let message1 = "This is test number 1.";
let delay1 = 1000;

let message2 = "This is test number 2.";
let delay2 = 4000;

let message3 = "This is test number 3.";
let delay3 = 2000;

// delayMessage(message1, delay1);
// delayMessage(message2, delay2);
// delayMessage(message3, delay3);