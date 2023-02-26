 var express = require("express");
 var router = express.Router();
 let request = require('request');
 const pool = require("../db/db");
 
 
const cors = require('cors');


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
router.use(cors(corsOptions));


router.get("/", function(req, res, next) {
   res.render("404", { title: "404" });
 });


 router.get("/view", async function(req, res, next) {

  pool.query("select * from Users;" ,(err, rows, fiels) => {  
      data=JSON.stringify(rows)
      result= JSON.parse(data)
     // result=""+body.insertId
      res.render("login", {
     title: "Users",
      result 

       });
   
  
 });
  
 
         
     
});
 
 
module.exports = router;
