const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const EventEmitter = require("events");
const logEvents = require("./logEvents");

class Emitter extends EventEmitter {}

// Initialize Object
const myEmitter = new Emitter();

// Creating basic server
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
