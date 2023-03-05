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

  const trimmedUsername = username.trim(); // Trim spaces before and after the username
  const trimmedEmail = email.trim(); // Trim spaces before and after the email
  const trimmedPassword = password.trim(); // Trim spaces before and after the password
  const confirmTrimmedPassword = confirmPassword.trim(); // Trim spaces before and after the password

  // Check if passwords match
  if (trimmedPassword !== confirmTrimmedPassword) {
    req.flash('error', 'Passwords do not match');
    res.status(400).render("signup", { messages: req.flash(), message: "Passwords do not match" });
    //res.status(400).redirect("/signup?registrationSuccess=false"); //query string false annd displays error pass mismatch 
    //creates newstring of username upto last character excluding the space, 
    //and checkes if space in string this will tell us if spaces exist in input username
  } else if (trimmedUsername.indexOf(' ') !== -1) { 
    req.flash('error', 'Username cannot contain spaces');
    res.status(400).render("signup", { messages: req.flash(), message: "Username cannot contain spaces" });
    //res.status(400).redirect("/signup?registrationSuccess=false"); //query string false and displays error username can not have spaces 
    //checks length of username 
  } else if (trimmedUsername.length < 8) {
    req.flash('error', 'Username must be at least 8 characters long');
    res.status(400).render("signup", { messages: req.flash(), message: "Username must be at least 8 characters long" });
    //res.status(400).redirect("/signup?registrationSuccess=false"); //query string false an displays error username not 8 characters min
  }else if (trimmedPassword.length < 8) {
    req.flash('error', 'Password must be at least 8 characters long');
    res.status(400).render("signup", { messages: req.flash(), message: "Password must be at least 8 characters long" });
  } else if (!trimmedPassword.match(/[a-z]/)) {
    //checks username has ATLEAST on Lowercase letter 
    req.flash('error', 'Password must contain at least one lowercase letter');
    res.status(400).render("signup", { messages: req.flash(), message: "Password must contain at least one lowercase letter" });
  } else if (!trimmedPassword.match(/[A-Z]/)) {
    //checks username has ATLEAST on uppercase letter 
    req.flash('error', 'Password must contain at least one uppercase letter');
    res.status(400).render("signup", { messages: req.flash(), message: "Password must contain at least one uppercase letter" });
  } else if (!trimmedPassword.match(/[^A-Za-z]/)) {
    req.flash('error', 'Password must contain at least one non-alphabetical character');
    res.status(400).render("signup", { messages: req.flash(), message: "Password must contain at least one non-alphabetical character" });
  } else if (trimmedPassword.indexOf(' ') !== -1) {
    req.flash('error', 'Password cannot contain spaces');
    res.status(400).render("signup", { messages: req.flash(), message: "Password cannot contain spaces" });
  } else {
    // Check if user already exists
    const exists = await userExists(trimmedUsername, trimmedEmail);
    if (exists) {
      req.flash('error', 'User already exists');
      res.status(400).render("signup", { messages: req.flash(), message: "User already exists" });
      //res.status(400).redirect("/signup?registrationSuccess=false"); //query string false, and displays error user already exits 
    } else {
      try {
        await pool.execute(
          "INSERT INTO Users (Username, Password, Email) VALUES (?, ?, ?)",
          [trimmedUsername, trimmedPassword, trimmedEmail] //trims spaces at end of username and email 
        );
        req.flash('success', 'Registration successful. Please log in.');
        res.status(200).redirect('/signin?registrationSuccess=true'); //query string true, redirects to login with success 
      } catch (err) {
        req.flash('error', err.message);
        res.status(400).render("signup", { messages: req.flash(), message: err.message});
        //res.status(400).redirect("/signup?registrationSuccess=false"); //query string false
        console.log(err);
      }
    }
  }
});

module.exports = router;
