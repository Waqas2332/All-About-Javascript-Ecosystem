const fs = require("fs");

// Reading Files
// In the callback function, data is in the form of buffer
fs.readFile("./starter.txt", (err, data) => {
  if (err) throw err;
  // converting buffer in string
  console.log(data.toString());
});
