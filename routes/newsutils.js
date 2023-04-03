const axios = require("axios");
const API_KEY = process.env.API_KEY;
const pool = require("../db/db");

const getNews = async (category = "general", page = 1, pageSize = 10) => {
    let res = null;
    
    try {
      // Make an API request to the News API with the specified category and pagination parameters
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`);
      const articles = response.data.articles;
      const totalResults = response.data.totalResults;

      res = { 
        title: 'News', 
        category: category,
        articles: articles,
        totalResults: totalResults
      };
  
    } catch (error) {
      console.error(error);
    }

    return res;
}

const getNewsUser = async(username, categories = [], page = 1) => {
  let res = null;
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
    //conconsole.log("articles from news util", articles[0]);st totalResults = responses.flatMap(response => response.data.totalResults).reduce((a, b) => a + b, 0);
    //console.log("categories from news util", categories);
    ///console.log("articles from news util", articles[0]);

    res = { 
      title: 'News', 
      username: username,
      categories: categories,
      articles: articles,
      totalResults: articles.length
    }

  } catch (error) {
    console.error(error);
  }
  return res;
}


module.exports = {
    getNews,
    getNewsUser,
   
}