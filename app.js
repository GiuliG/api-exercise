var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var students = require ('./routes/students')
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
// var Students = require('../model/students');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// --

mongoose.connect('mongodb://localhost/students', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});


app.use('/', indexRouter);
// app.use('/api', students)




// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({code: 'not found'});
  });
  
  app.use((err, req, res, next) => {
    // always log the error
    console.error('ERROR', req.method, req.path, err);
  
    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({code: 'unexpected'});
    }
  });

module.exports = app;
