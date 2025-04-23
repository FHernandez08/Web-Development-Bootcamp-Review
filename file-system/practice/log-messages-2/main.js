const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const greet = () => {
    console.log("This event has been activated.");
}

myEmitter.on("greet", greet);
myEmitter.emit("greet");
