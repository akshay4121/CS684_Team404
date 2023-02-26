const express = require("express");
const async = require("hbs/lib/async");
const { DATETIME2 } = require("mysql/lib/protocol/constants/types");
const router = express.Router();
const pool = require("../db/db");


const cors = require('cors');


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
router.use(cors(corsOptions));


router.get("/", (req, res) => {
    pool.query("select * from Users;" ,(err, rows, fiels) => {  
       data=JSON.stringify(rows)
       result= JSON.parse(data)
    
    
    if (!err) {
        res.send(result)
        console.log(fiels);
    } else {
        res.status(400).send(err)
      console.log(err);
    }
  });
});