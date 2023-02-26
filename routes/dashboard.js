var express = require("express");
var router = express.Router();
let request = require('request');
const cors = require('cors');
const session = require("express-session");

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}

router.use(cors(corsOptions));
router.use(session({
  secret: "secret",

  resave: true,
  saveUninitialized: true
}));

// Define your dashboard route
router.get("/", function(req, res, next) {
  // Check if user is logged in
  if (!req.session.login) {
    res.redirect("/login");
  } else {
    res.render("dashboard", { title: "dashboard" });
  }
});

module.exports = router;
