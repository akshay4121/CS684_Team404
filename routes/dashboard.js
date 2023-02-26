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
    res.redirect("/signin");
  } else {
    res.render("dashboard", { title: "dashboard", username: req.session.username });
  }
});

// Route to fetch the username
router.get("/username", function(req, res, next) {
  if (!req.session.login) {
    res.status(401).send('Not logged in');
  } else {
    res.send(req.session.username);
  }
});

router.use(function(req, res, next) {
  res.status(404).render("404", { title: "404" });
});

module.exports = router;
