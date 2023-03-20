const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const axios = require("axios");
const flash = require('connect-flash');
const session = require("express-session");
const cors = require('cors');
require('dotenv').config()


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

const API_KEY = process.env.API_KEY;
//console.log(API_KEY);

router.get("/", async (req, res) => {
  const category = "general";
  const uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  // Prevent caching of the page
  res.setHeader("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.setHeader("Expires", "-1");
  res.setHeader("Pragma", "no-cache");
  
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
    res.render("home", {
      title: "Home",
      category: category,
      articleList: `<ul>${articleList}</ul>`,
      API_KEY: API_KEY,
      isLoggedIn: req.session.login
  
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports= router;
