const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const axios = require("axios");
require('dotenv').config()

const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
  const category = "general";
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
    res.render("home", {
      title: "Home",
      category: category,
      articleList: `<ul>${articleList}</ul>`,
      API_KEY: API_KEY
    });
  } catch (error) {
    res.send(error);
  }
});


module.exports= router;
