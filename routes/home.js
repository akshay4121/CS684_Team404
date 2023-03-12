const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const axios = require("axios");
//const cors = require('cors');
require('dotenv').config()


//const session = require('express-session');
//const flash = require('connect-flash');

var API_KEY = process.env.API_KEY;
//render debug to see key in log
console.log(API_KEY);

router.get('/', (req, res) => {
  var category = 'general';
  var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  axios
    .get(uri)
    .then(response => {
      var data = response.data;
      var articles = data.articles;
      var articleList = '<ul>';

      articles.forEach(article => {
        articleList += `
          <li>
            <img src="${article.urlToImage}" alt="${article.title}" />
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </li>
        `;
      });

      articleList += '</ul>';

      res.render('home', {
        title: 'Home',
        category: category,
        articleList: articleList,
        API_KEY: API_KEY
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('API call: Internal Server Error');
    });
});

module.exports = router;
