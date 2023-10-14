import express from "express";
import mysql from "mysql";
import cors from "cors";
let app = express();

app.use(express.json());
app.use(cors());
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "spectron",
});

app.get("/", (req, res) => {
  res.json("ksjcaksc");
});
app.get("/cars", (req, res) => {
  let query = "SELECT * FROM `vehicles`; ";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("connected to backend..");
});
