var express = require("express");
var router = express.Router();
const pool = require("../db/db");
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');
const ejs = require('ejs');


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));

router.use(flash());

router.get("/", function (req, res) {
  res.render("login", { message: req.flash('error') });
});

async function userExists(email, password) {
  const result = await pool.query("SELECT * FROM Users WHERE Email = ? AND Password = ?", [email, password]);
  const rows = result && result[0];
  //console.log("con log for rows");
  //console.log(rows);
  return rows && rows.length > 0;
}

router.post("/", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  //console.log("email and pass con log ");
  //console.log(email, password);

  if (await userExists(email, password)) {
    req.session.email = email;
    req.session.login = true;
    req.session.save()
    res.redirect("/dashboard");
  } else {
    req.flash("error", "Invalid email or password");
    res.redirect("/login");
  }
});

module.exports = router;
