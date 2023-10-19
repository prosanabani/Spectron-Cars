import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import path from "path";
let app = express();

app.use(express.json());
app.use(cors());
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "spectron",
});
///////////////////////////////////////
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
/////////////////////////
let upload = multer({
  storage: storage,
});
//////////////////////////////////////

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
app.get("/make", (req, res) => {
  let query = "SELECT * FROM `make`; ";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/type", (req, res) => {
  let query = "SELECT * FROM `type`; ";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//////////////////////////////////
app.post("/cars", (req, res) => {
  let q =
    " INSERT INTO `vehicles`(`name`, `price`, `year_made`, `transmission`, `type`, `reviews`, `rating`, `model`, `make`, `mileage`, `car_condition`, `img`, `fueltype`) VALUES (?);";
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
    req.body.fueltype,
  ];

  db.query(q, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json("sucsess");
  });
});

app.post("/discount", (req, res) => {
  let query =
    " INSERT INTO `vehicles`(`name`, `price`, `year_made`, `transmission`, `type`, `reviews`, `rating`, `model`, `make`, `mileage`, `car_condition`, `img`, `fueltype`) VALUES (?);";
  let VALUES = [req.body.id, req.body.price];

  db.query(query, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json("sucsesssssssssssssssssss");
  });
});

// app.post("/upload", upload.single("image"), (req, res) => {
//   let image = req.file.filename;
//   console.log(image);
//   let sql = " INSERT INTO `temp`(`image`)VALUES (?);";
//   db.query(sql, [image], (err, result) => {
//     if (err) return res.json({ Message: "Error" });
//     return res.json({ Status: "Sucess" });
//   });
// });

app.listen(8800, () => {
  console.log("connected to backend..");
});
