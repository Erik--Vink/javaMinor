var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var session = require('express-session');

//Custom modules
//Initialize mongoose models
require('./modules/datamodels').init(mongoose);

//Initialize error handling
var err = require('./modules/errors');

//Get repositories
var userRepository = require('./modules/repositories/user')(mongoose);
var practicumRepository = require('./modules/repositories/practicum')(mongoose);
var practicumUserRepository = require('./modules/repositories/practicum_user')(mongoose);


//routes
var api = require('./routes/api')(userRepository, practicumRepository, practicumUserRepository);

//Start the app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, Content-Type, Accept");

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

app.use('/api', api);

app.get('*', function(req, res) {
  res.sendfile('./public/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

err.init(app);
module.exports = app;
