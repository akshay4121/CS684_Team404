const express = require("express");
const router = express.Router();
const flash = require('connect-flash');
const session = require("express-session");
const cors = require('cors');
require('dotenv').config();
const axios = require("axios");
const moment = require('moment');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
};

router.use(cors(corsOptions));

const sessionOptions = {
  secret: "secret",
  resave: true,
  saveUninitialized: true
};

router.use(session(sessionOptions));

router.use(flash());


// Define the number of items per page
const PAGE_SIZE = 5;

router.get("/", async (req, res) => {
  // Get the current page from the query parameters, or default to page 1
  const currentPage = req.query.page ? parseInt(req.query.page) : 1;

  let category = "general";

  try {
    // Make a request to the `/news` endpoint using axios library, passing the `category` variable as a parameter
    const response = await axios.get(`http://localhost:8080/news`);

    const articles = response.data.articles;

    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    // Get the articles for the current page
    const pageArticles = articles.slice(startIndex, endIndex);

    // Calculate the number of pages
    const numPages = Math.ceil(articles.length / PAGE_SIZE);

    // Generate an array of page numbers for the pagination links
    const pages = Array.from({ length: numPages }, (_, i) => ({
      page: i + 1,
      isActive: i + 1 === currentPage
    }));

    // Determine if there is a previous page and a next page
    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < numPages;
    const prevPage = currentPage - 1; // Set the previous page number
    const nextPage = currentPage + 1; // Set the next page number
    const firstPage = 1; // Set the first page number
    const lastPage = numPages; // Set the last page number


    res.render("home", {
      title: "Home",
      category: category,
      articles: pageArticles,
      API_KEY : process.env.API_KEY,
      isLoggedIn: false,
      pages,
      hasPrevPage,
      hasNextPage,
      currentPage,
      prevPage, 
      nextPage, 
      firstPage,
      lastPage
    });
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});


router.post('/homerefresh', (req, res) => {
  res.redirect('/');
});

module.exports= router;
