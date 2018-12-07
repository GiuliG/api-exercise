var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/student', (req, res, next) => {
  students.find()
  .then(()=>{
  res.status(200);
  res.JSON(students)
})
.catch(next)

})

module.exports = router;