const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config()
const pool = require("../db/db");
const moment = require('moment');

const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
  // Make an API request to the News API with the specified category
  const uri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  res.header("Access-Control-Allow-Origin", "*");

  axios
    .get(uri)
    .then(function (response) {
      const data = response.data.articles;
      const limitedArticles = data.slice(0, 250).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      const articles = limitedArticles.map(article => {
        article.publishedAt = moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a');
        return article;
      });

      res.status(200).json({ totalResults: articles.length, articles: articles });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error });
    });
});


router.get("/:category", async (req, res) => {
  const category = req.params.category;
  const uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  res.header("Access-Control-Allow-Origin", "*");

  axios
    .get(uri)
    .then(function (response) {
      const data = response.data.articles;
      const limitedArticles = data.slice(0, 250).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      const articles = limitedArticles.map(article => {
        article.publishedAt = moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a');
        return article;
      });
      res.status(200).json({
        title: `News for category - ${category}`,
        category: category,
        totalResults: articles.length,
        articles: articles,
        isLoggedIn: false
      });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error });
    });
});





module.exports = router;
