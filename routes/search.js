const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config()
const pool = require("../db/db");
const moment = require('moment');

const API_KEY = process.env.API_KEY;

router.get("/:search", async (req, res) => {
  const search = req.params.search;
    const uri = `https://newsapi.org/v2/everything?q=${search}&pageSize=10&apiKey=${API_KEY}`;
    res.header("Access-Control-Allow-Origin", "*");

  axios
    .get(uri)
    .then(function (response) {
    var data = response.data;
      res.status(200).json({ data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error });
    });
});


module.exports = router;
