const express = require("express");
const router = express.Router();
const multer = require("multer");
const bodyParser = require("body-parser");
const {connection} = require('../database/sql');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var upload = multer({ storage });

router.post('/', upload.single("file"), (req, res) => {
   
  const title = req.body.title;
  const file = req.file ? req.file.filename : null;
  const content = req.body.content;
  
  const data={
    title:title,
    content:content,
     file:file
  }

  connection.query('INSERT into createblog SET ?', data,(err,resQuery)=>{
     if(err) throw err;
     else {
        console.log("data store");
        res.redirect('https://tiers-backend-task1.vercel.app')
     }
  })
 
});

module.exports = router;
