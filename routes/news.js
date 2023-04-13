const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config()
const pool = require("../db/db");
const { getNews, getNewsUser, getNewsCat } = require('./newsutils.js');

const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
  const category = req.query.category || "general";
  const page = req.query.page || 1; // Get the page number from the query parameters or use 1 as the default value
  const pageSize = req.query.pageSize || 10; // Get the page size from the query parameters or use 10 as the default value

  try {
    // Call the getNews function with the specified category and pagination parameters
    const news = await getNews(category, page, pageSize);
    //console.log('calling from news api which is call from getNews function');

    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



router.get("/:username", async (req, res) => {
  const username = req.params.username;
  let categories = req.session.categories || [];
  if(req.query.category) {
    categories = [req.query.category];
  }
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const pageSize = 5;
  let totalResults = 0;

  try {
    const result = await pool.query("SELECT Username FROM Users WHERE Username = ?", [username]);
    if (result && result[0].length === 0) {
      // User not found
      throw { status: 401, message: "User not found" };
    }

    const news = await getNewsUser(username, categories, page, pageSize);
    //totalResults = news.totalResults;
    //console.log('calling from news api which is call from getNewsUser function');
    //console.log('categories', categories);
    res.status(200).json({ news });
  } catch (error) {
    console.error(error);
    if (error.status && error.message) {
      res.status(error.status).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
    
  }
});



module.exports = router;
