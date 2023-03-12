const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_KEY = process.env.API_KEY || "ecb7a9205ae8458ca453d1537bb1e3c4";

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
      title: "home",
      articleList: `<ul>${articleList}</ul>`
    });
  } catch (error) {
    res.status(500).send("API call: Internal Server Error");
  }
});

module.exports = router;
