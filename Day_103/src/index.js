const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome To Production Level Folder Structure");
});

app.listen(port, () => {
  console.log(`Express app is running at http://localhost:${port}`);
});
