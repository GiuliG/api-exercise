var express = require('express');
var router = express.Router();
var Student = require('../model/students');


router.get('/students', (req, res, next) => {
  Student.find({})
  .then((students) =>{
      console.log(students)
      res.status(200);
      res.json(students)
    })
    .catch(next)
});



module.exports = router;
