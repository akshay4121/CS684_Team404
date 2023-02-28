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


//show signup page with flashes if they exist
router.get("/", (req, res) => {
  res.render("signup", { title: "Signup", messages: req.flash() });
});

router.post("/", async (req, res) => {
  const { username, password, confirmPassword, email } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    req.flash('error', 'Passwords do not match');
    res.status(400).redirect("/signup?registrationSuccess=false"); //query string false annd displays error pass mismatch 
    //creates newstring of username upto last character excluding the space, 
    //and checkes if space in string this will tell us if spaces exist in input username
  } else if (username.slice(0, -1).indexOf(' ') !== -1) { 
    req.flash('error', 'Username cannot contain spaces');
    res.status(400).redirect("/signup?registrationSuccess=false"); //query string false and displays error username can not have spaces 
    //checks length of username 
  } else if (username.trim().length < 8) {
    req.flash('error', 'Username must be at least 8 characters long');
    res.status(400).redirect("/signup?registrationSuccess=false"); //query string false an displays error username not 8 characters min
  } else {
    // Check if user already exists
    const exists = await userExists(username.trim(), email.trim());
    if (exists) {
      req.flash('error', 'User already exists');
      res.status(409).redirect("/signup?registrationSuccess=false"); //query string false, and displays error user already exits 
    } else {
      try {
        await pool.execute(
          "INSERT INTO Users (Username, Password, Email) VALUES (?, ?, ?)",
          [username.trim(), password, email.trim()] //trims spaces at end of username and email 
        );
        req.flash('success', 'Registration successful. Please log in.');
        res.status(201).redirect('/signin?registrationSuccess=true'); //query string true, redirects to login with success 
      } catch (err) {
        req.flash('error', err.message);
        res.status(500).redirect("/signup?registrationSuccess=false"); //query string false
        console.log(err);
      }
    }
  }
});

module.exports = router;
