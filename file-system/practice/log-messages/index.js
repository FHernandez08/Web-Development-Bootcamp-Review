const EventEmitter = require('events');
const fs = require('fs');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const newMessage = "This is the first message for the new document.";

myEmitter.on('logMessage', (message) => {
    console.log(`The message has been logged onto the document: ${message}`);
});

fs.writeFile('practice/log-messages/messages-log.txt', newMessage, (error) => {
    if (error) {
        console.log(error);
    }

    else {
        console.log("Log added to the file!")
        myEmitter.emit('logMessage', newMessage);
    }
})
