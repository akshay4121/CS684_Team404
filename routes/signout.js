var express = require("express");
var router = express.Router();
let request = require('request');
const cors = require('cors');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}

router.use(cors(corsOptions));

// Define your dashboard route
router.get("/", function(req, res, next) {
  res.render("signout", { title: "signout" });
});

router.post("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Oops! Something went wrong.");
    } else {
      res.clearCookie('connect.sid'); // clear the session cookie
      res.redirect("/login");
    }
  });
});

module.exports = router;