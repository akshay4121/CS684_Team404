const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const axios = require("axios");
const cors = require('cors');
require('dotenv').config()


const session = require('express-session');
const flash = require('connect-flash');


const app = express();

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

const API_KEY = process.env.API_KEY;
//render debug to see key in log
//console.log(API_KEY);

router.get("/", async (req, res) => {
  try {
    const category = "general";
    const uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    const response = await axios.get(uri);
    const articles = response.data.articles;
    const articleList = articles.map(article => {
      return `
        <li>
          <img src="${article.urlToImage}" alt="${article.title}" />
          <h4>${article.title}</h4>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </li>
      `;
    }).join('');
    
    res.render("home", {
      title: "Home",
      category: category,
      articleList: `<ul>${articleList}</ul>`,
      API_KEY: API_KEY
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("API call: Internal Server Error");
  }
});

module.exports = router;
