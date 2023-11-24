const fsPromises = require("fs").promises;
const path = require("path");

async function fileOps() {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "starter.txt"),
      "utf-8"
    );
    await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);
    await fsPromises.appendFile(
      path.join(__dirname, "promiseWrite.txt"),
      "\n\nNice To Meet You"
    );
    await fsPromises.rename(
      // Older Name
      path.join(__dirname, "promiseWrite.txt"),
      // New Name
      path.join(__dirname, "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
}

fileOps();

// Reading Files
// In the callback function, data is in the form of buffer
// fs.readFile(path.join(__dirname, "starter.txt"), (err, data) => {
//   if (err) throw err;
//   // converting buffer in string
//   console.log(data.toString());
// });

// writeFile() ==> takes path to the file , content which should be written, and then returns a callback
// fs.writeFile(path.join(__dirname, "reply.txt"), "Nice to meet you", (err) => {
//   if (err) throw err;
//   // converting buffer in string
//   console.log("Write Operation Completed Successfully");
// });

// fs.appendFile(path.join(__dirname, "test.txt"), "\nChecking update", (err) => {
//   if (err) throw err;
//   // converting buffer in string
//   console.log("Append Operation Completed Successfully");
// });
