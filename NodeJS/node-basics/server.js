// ? console.log(global);

// importing core nodejs modules

//  module about working with operating system
const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Gives the absolute path to our current directory
console.log(__dirname);
// Gives same path like dirname but also includes file name
console.log(__filename);

// using path module

console.log(path.dirname(__filename)); // Same as simple __dirname
console.log(path.basename(__filename)); // Gives name of current file
console.log(path.extname(__filename)); // Give extension of curr file
