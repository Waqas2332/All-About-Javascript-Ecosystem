import express from "express";

const app = express();

app.use("hello", function (req, res, next) {
  res.send("Hello World");
});

app.listen(8000, function () {
  console.log("Server is running on port 3000");
});
