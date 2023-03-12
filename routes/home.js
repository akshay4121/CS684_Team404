const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const axios = require("axios");

const session = require('express-session');
const flash = require('connect-flash');

const app = express();
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

const corsOptions = {
  origin: 'https://team404.onrender.com/', 
  credentials: true,            
  optionSuccessStatus: 200
};

router.get("/", async (req, res) => {
  try {
    const category = "general";
    const API_KEY = "913b6adfc01548c3bf2f5c39612eb959";
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
      title: "home",
      articleList: `<ul>${articleList}</ul>`
    });
  } catch (error) {
    res.status(500).send("API call: Internal Server Error");
  }
});

router.get("/view", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM Users");
    const result = rows.map(row => row.toJSON());
    res.render("subscribed", {
      title: "Users",
      result
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/data", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM Users");
    const result = rows.map(row => row.toJSON());
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("API call: Internal Server Error ");
  }
});

router.post("/", async (req, res) => {
  try {
    const users = req.body;
    const sql = "INSERT INTO Users (Username, Password) VALUES (?, ?)";
    const result = await pool.query(sql, [users.Username, users.Password]);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
