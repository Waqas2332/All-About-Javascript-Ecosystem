const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initalized object
const myEmitter = new MyEmitter();

// add event listening for creating the event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Triggering the event
  myEmitter.emit("log", "Log Event Triggered");
}, 4000);
