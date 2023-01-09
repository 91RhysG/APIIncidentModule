
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const sql = require("msnodesqlv8");

const connectionString =
  "server=.;Database=IncidentModuleDatabase;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM Person";

sql.query(connectionString, query, (err, rows) => {
  console.log(rows);
});
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  console.log("Index reached!");
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
