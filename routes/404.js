
var express = require("express");
var router = express.Router();
let request = require('request');
const session = require('express-session');
const pool = require("../db/db");
const flash = require('connect-flash');

const cors = require('cors');


router.use(session({
 secret: 'secret',
 resave: false,
 saveUninitialized: false
}));

router.use(flash());

const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
router.use(cors(corsOptions));


/*router.get("/", function(req, res, next) {
  res.render("home", { title: "home" });
});
*/


router.get("/view", async function(req, res, next) {

 pool.query("select * from Users;" ,(err, rows, fiels) => {  
     data=JSON.stringify(rows)
     result= JSON.parse(data)
    // result=""+body.insertId
     res.render("subscribed", {
    title: "Users",
     result 

      });
  
 
});
 

        
    
});

router.get("/", (req, res) => {
   pool.query("select * from Users;" ,(err, rows, fiels) => {  
      result=JSON.stringify(rows)
      
      //result= JSON.parse(data)
   
   
   if (!err) {
       res.send(result)
       console.log(fiels);
   } else {
       res.status(400).send(err)
     console.log(err);
   }
 });
});

router.post("/", async (req, res) => {
 var users= req.body

  
   pool.query("INSERT INTO Users (Username,Password) VALUES ('"+users.Username+"','"+users.Password+"');" ,(err, rows, fiels) => {  
if (!err) {
  
  res.json(rows);
  console.log(fiels);
} else {
    res.status(400).send(err)
     console.log(err);
} });

 
});

module.exports = router;
