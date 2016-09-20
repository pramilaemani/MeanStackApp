// Variable declarations

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// To connect the database from mongodb
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/prototypeDB');
// Route declaration of index,vin,camp details
var routes = require('./routes/index');
var getcampdets = require('./routes/getcampdets');
var getvindets = require('./routes/getvindets');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/getcampdets', getcampdets);
app.use('/getvindets', getvindets);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




exports.closeServer = function(){
  server.close();
};



module.exports = app;
