const express = require("express");
const router = express.Router();
const request = require('request');
const cors = require('cors');
const session = require("express-session");
const axios = require("axios");
const pool = require("../db/db");
require('dotenv').config();

const API_KEY = process.env.API_KEY;
//console.log("Log 1")
//console.log(API_KEY)
if (!API_KEY) {
  console.error("API_KEY not found in .env file");
  process.exit(1);
}

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

const category = "General";

const isAuthenticated = (req, res, next) => {
  if (req.session.login) {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    next();
  } else {
    req.session.login = false;
    res.redirect('/signin');
  }
};

router.get("/", isAuthenticated, async (req, res) => {
  //console.log("Log 2")
  //console.log(API_KEY)
  const uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  
  try {
    const response = await axios.get(uri);
    const data = response.data;
    const articles = data.articles;
    const articleList = articles.map(article => {
      return `
        <li>
          <img src="${article.urlToImage}" alt="${article.title}" />
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </li>
      `;
    }).join('');
    res.render("dashboard", {
      title: "Dashboard",
      category: category,
      articleList: `<ul>${articleList}</ul>`,
      username: req.session.username,
      API_KEY: API_KEY
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops! Something went wrong.");
  }
});


router.get("/username", (req, res) => {
  if (req.session.login) {
    res.send(req.session.emailOrUsername);
  } else {
    req.session.login = false;
    res.status(401).send('Not logged in');
  }
});

router.get("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Oops! Something went wrong.");
    } else {
      res.redirect("/signin");
    }
  });
});

router.use((req, res) => {
  res.status(404).render("404", {
    title: "404"
  });
}); 

module.exports = router;
