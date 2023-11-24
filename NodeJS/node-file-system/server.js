const fs = require("fs");
const path = require("path");

// Reading Files
// In the callback function, data is in the form of buffer
fs.readFile(path.join(__dirname, "starter.txt"), (err, data) => {
  if (err) throw err;
  // converting buffer in string
  console.log(data.toString());
});
