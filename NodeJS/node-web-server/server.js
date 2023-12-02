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
  const extensionName = path.extname(req.url);
  console.log(extensionName);
  let contentType;

  switch (extensionName) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
