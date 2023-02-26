const express = require("express");
const router = express.Router();
const pool = require("../db/db");

const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');

router.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

router.use(flash());

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,            
  optionSuccessStatus: 200
};

router.use(cors(corsOptions));

router.get("/", (req, res) => {
  res.render("home", { title: "home" });
});

router.get("/view", async (req, res) => {
  pool.query("SELECT * FROM Users", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      const data = JSON.stringify(rows);
      const result = JSON.parse(data);
      res.render("subscribed", {
        title: "Users",
        result
      });
    }
  });
});

router.get("/data", (req, res) => {
  pool.query("SELECT * FROM Users", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("API call: Internal Server Error ");
    } else {
      const result = JSON.stringify(rows);
      res.send(result);
    }
  });
});

router.post("/", async (req, res) => {
  const users = req.body;
  pool.query("INSERT INTO Users (Username, Password) VALUES ('"+users.Username+"','"+users.Password+"');", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
