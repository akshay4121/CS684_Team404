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
  const currentPage = parseInt(req.query.page) || 1;

  let category = req.query.category === "Home" ? "General" : req.query.category || "General";
  let currentCategory = req.query.category && req.query.category !== "Home" ? req.query.category : "Home";
  
  const allArticles = [];
  let totalResults = 0;

  try {
    // Make a request to the `/news` endpoint using axios library, passing the `category` variable as a parameter
    const response = await axios.get(`http://localhost:8080/news?category=${category}`);

    let articles = response.data.articles;
    const articlesWithCategory = articles.map(article => ({...article, category2: category}));
    
    allArticles.push(...articlesWithCategory);
    totalResults += articles.length;

    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, totalResults);

    // Calculate the number of pages
    const numPages = Math.ceil(totalResults / PAGE_SIZE);

    //sorting by date and time
    allArticles.sort(function(a, b) {
      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });
    
    // Format the publishedAt property of each article
    for (let i = 0; i < allArticles.length; i++) {
      const article = allArticles[i];
      article.publishedAt = moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a');
    }

    // Generate an array of page numbers for the pagination links
    let pages = [];
      if (numPages > 0) {
        pages = Array.from({ length: numPages }, (_, i) => ({
          page: i + 1,
          isActive: i + 1 === currentPage,
          category: currentCategory
      }));
    }

    articles = allArticles.slice(startIndex, endIndex);

    // Determine if there is a previous page and a next page
    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < numPages;
    const prevPage = currentPage - 1; // Set the previous page number
    const nextPage = currentPage + 1; // Set the next page number
    const firstPage = 1; // Set the first page number
    const lastPage = numPages; // Set the last page number

    const catButtons = ['Home', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];
    const CategoryBtns = catButtons.map((str, index) => ({ value: str, isActive: str === currentCategory || (str === 'Home' && !currentCategory), url: `/?category=${str}` }));
   
    res.render("home", {
      title: "Home",
      category: category,
      articles: articles,
      API_KEY : process.env.API_KEY,
      isLoggedIn: false,
      pages,
      hasPrevPage,
      hasNextPage,
      currentPage,
      prevPage, 
      nextPage, 
      firstPage,
      lastPage,
      CategoryBtns,
      currentCategory
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
