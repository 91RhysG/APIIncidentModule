const express = require("express");
const app = express();
const cors = require("cors");
const { response } = require("express");

const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/templates/index.html");
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
