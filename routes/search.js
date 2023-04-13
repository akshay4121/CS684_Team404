const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config()
const pool = require("../db/db");
const moment = require('moment');

const API_KEY = process.env.API_KEY;



router.get("/:query", async (req, res) => {
  const query = req.params.query;
  const uri = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
  res.header("Access-Control-Allow-Origin", "*");

  try {
    const response = await axios.get(uri);
    const articles = response.data.articles.slice(0, 250).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    if (articles.length === 0) {
      res.status(404).json({ message: 'Sorry no articles found' });
    } else {
      const formattedArticles = articles.map(article => {
        const date = new Date(article.publishedAt);
        const formattedDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
        article.publishedAt = formattedDate;
        return article;
      });
      res.status(200).json({ articles: formattedArticles });
    }

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Sorry, there was an error retrieving the articles.' });
  }
});



router.get("/advance/:query", async (req, res) => {
  const searchQuery = req.params.query.split(',').join(' ');
  const operator1 = req.query.operator1;
  const searchInput1 = req.query.searchInput1;
  const operator2 = req.query.operator2;
  const searchInput2 = req.query.searchInput2;
  const operator3 = req.query.operator3;
  const searchInput3 = req.query.searchInput3;
  const operator4 = req.query.operator4;
  const searchInput4 = req.query.searchInput4;
  const operator5 = req.query.operator5;
  const searchInput5 = req.query.searchInput5;

  let uri = `https://newsapi.org/v2/everything?q=${searchQuery}`;

  if (searchInput1) {
    uri += ` ${operator1} ${searchInput1}`;
  }

  if (searchInput2) {
    uri += ` ${operator2} ${searchInput2}`;
  }

  if (searchInput3) {
    uri += ` ${operator3} ${searchInput3}`;
  }

  if (searchInput4) {
    uri += ` ${operator4} ${searchInput4}`;
  }

  if (searchInput5) {
    uri += ` ${operator5} ${searchInput5}`;
  }

  uri += `&apiKey=${API_KEY}`;

  res.header("Access-Control-Allow-Origin", "*");

  try {
    const response = await axios.get(uri);
    const articles = response.data.articles.slice(0, 250).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Check if articles array is empty
    if (articles.length === 0) {
      res.status(404).json({ message: 'Sorry no articles found' });
      return;
    }

    const formattedArticles = articles.map(article => {
      const date = new Date(article.publishedAt);
      const formattedDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
      article.publishedAt = formattedDate;
      return article;
    });
    res.status(200).json({ articles: formattedArticles });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Sorry, there was an error retrieving the articles.' });
  }
});

module.exports = router;
