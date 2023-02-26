const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

router.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

router.use(flash());

// Function to check if a user already exists in the database
const userExists = async (username, email) => {
  const [rows] = await pool.execute(
    "SELECT * FROM Users WHERE Username = ? OR Email = ?",
    [username, email]
  );
  return rows.length > 0;
};

router.get("/", (req, res) => {
  res.render("register", { title: "Register", messages: req.flash() });
});

router.post("/", async (req, res) => {
  const { username, password, confirmPassword, email } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    req.flash('error', 'Passwords do not match');
    //console.log("error: pass mismatch ")
    res.redirect("/register?registrationSuccess=false");
  } else {
    // Check if user already exists
    const exists = await userExists(username, email);
    if (exists) {
      req.flash('error', 'User already exists');
      //console.log("error: User already exists ")
      res.redirect("/register?registrationSuccess=false");
    } else {
      try {
        await pool.execute(
          "INSERT INTO Users (Username, Password, Email) VALUES (?, ?, ?)",
          [username, password, email]
        );
        req.flash('success', 'Registration successful. Please log in.');
        res.redirect('/login?registrationSuccess=true');
      } catch (err) {
        req.flash('error', err.message);
        res.redirect("/register?registrationSuccess=false");
        console.log(err);
      }
    }
  }
});

module.exports = router;
