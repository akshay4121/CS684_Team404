const express = require("express");
const router = express.Router();
const flash = require('connect-flash');
const session = require("express-session");
const cors = require('cors');
require('dotenv').config();
const axios = require("axios");

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
};

router.use(cors(corsOptions));

const sessionOptions = {
  secret: "secret",
  resave: true,
  saveUninitialized: true
};

router.use(session(sessionOptions));

router.use(flash());

router.get("/", async (req, res) => {
  let category = "general";

  try {
    // Make a request to the `/news` endpoint using axios library, passing the `category` variable as a parameter
    const response = await axios.get(`http://localhost:8080/news`);

    const articles = response.data.articles;
    res.render("home", {
      title: "Home",
      category: category,
      articles: articles,
      API_KEY: process.env.API_KEY,
      isLoggedIn: false
    });
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});



router.post('/homerefresh', (req, res) => {
  res.redirect('/');
});

module.exports= router;
