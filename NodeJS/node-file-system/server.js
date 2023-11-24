const fs = require("fs");
const path = require("path");

// Reading Files
// In the callback function, data is in the form of buffer
fs.readFile(path.join(__dirname, "starter.txt"), (err, data) => {
  if (err) throw err;
  // converting buffer in string
  console.log(data.toString());
});

// writeFile() ==> takes path to the file , content which should be written, and then returns a callback
fs.writeFile(path.join(__dirname, "reply.txt"), "Nice to meet you", (err) => {
  if (err) throw err;
  // converting buffer in string
  console.log("Write Operation Completed Successfully");
});

fs.appendFile(path.join(__dirname, "test.txt"), "\nChecking update", (err) => {
  if (err) throw err;
  // converting buffer in string
  console.log("Append Operation Completed Successfully");
});
