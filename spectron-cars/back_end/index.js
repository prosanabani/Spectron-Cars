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

app.post('/cars', (req, res) => {
  let q = " INSERT INTO `vehicles`(`name`, `price`, `year_made`, `transmission`, `type`, `reviews`, `rating`, `model`, `make`, `mileage`, `car_condition`, `img`, `fueltype`) VALUES (?);"
  let VALUES = [
    req.body.name,
    req.body.price,
    req.body.year,
    req.body.transmission,
    req.body.type,
    req.body.reviews,
    req.body.rating,
    req.body.model,
    req.body.make,
    req.body.mileage,
    req.body.condition,
    req.body.img,
    req.body.fueltype

  ];

  db.query(q, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json('sucsess');
  })


})

app.listen(8800, () => {
  console.log("connected to backend..");
});
