//api/routes/get.js
const express = require("express");
const router = express.Router();
const {connection} = require('../database/sql');

router.get('/',(req,response)=>{
    connection.query('SELECT * from createblog',(err,res)=>{
        if (err) throw err;
        else {
            response.send(res);
        }
    })
})

router.get('/:id', (req, response) => {
    const blogId = req.params.id;
    connection.query('SELECT * FROM createblog WHERE id = ?', [blogId], (err, res) => {
        if (err) throw err;
        else {
            response.send(res);
        }
    });
});
  

module.exports=router;