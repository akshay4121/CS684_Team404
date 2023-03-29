const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config()
const pool = require("../db/db");

const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
  const category = "general";

  try {
    // Make an API request to the News API with the specified category
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    const articles = response.data.articles;

    res.status(200).json({ 
      title: 'News', 
      category: category,
      articles: articles 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:username", async (req, res) => {
  const username = req.params.username;
  const categories = req.query.category ? [req.query.category.toLowerCase()] : [];

  try {
    if (categories.length === 0) {
      // Retrieve the user's preferred categories from the database
      const result = await pool.query("SELECT General, Business, Entertainment, Health, Science, Sports, Technology FROM Users WHERE Username = ?", [username]);
      const userPreferences = result && result[0].length > 0 ? {
        General: result[0][0].General.readInt8(0),
        Business: result[0][0].Business.readInt8(0),
        Entertainment: result[0][0].Entertainment.readInt8(0),
        Health: result[0][0].Health.readInt8(0),
        Science: result[0][0].Science.readInt8(0),
        Sports: result[0][0].Sports.readInt8(0),
        Technology: result[0][0].Technology.readInt8(0),
      } : null;

      for (let category in userPreferences) {
        if (userPreferences[category]) {
          categories.push(category.toLowerCase());
        }
      }
    }

    // Make an API request to the News API with the specified categories
    const promises = categories.map(category => axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`));
    const responses = await Promise.all(promises);
    const articles = responses.flatMap(response => response.data.articles);

    res.status(200).json({ 
      title: 'News', 
      categories: categories,
      articles: articles 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = router;
