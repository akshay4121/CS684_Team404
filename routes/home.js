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

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,            
  optionSuccessStatus: 200
};
router.use(cors(corsOptions));

var API_KEY = process.env.API_KEY;
//render debug to see key in log
//console.log(API_KEY);

router.get("/", async (req, res) => {
  var category = "general";
  var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  axios
    .get(uri)
    .then(function (response) {
      var data = response.data;
      var articles = data.articles;
      var articleList = articles.map(article => {
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
        API_KEY: API_KEY
      });
    })
    .catch(function (error) {
      res.send(error);
    });
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
