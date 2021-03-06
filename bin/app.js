var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var debug = require('debug')('ph-todos:app.js');
var stringify = require('node-stringify');

var app = express();
var publicPath = '../client/public';

// view engine setup
app.set('views', path.join(__dirname, publicPath, '/views'));
// app.set('view engine', 'jade'); // not using Jade atm.
// app.set('view engine', 'pug');
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, publicPath, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, publicPath, 'js'))); // bundle will reside here
app.use(express.static(path.join(__dirname, publicPath, 'js/libs')));
app.use(express.static(path.join(__dirname, publicPath, 'css')));

debug('--- Now going to load and couple the new serverbundle...');
var bundle = require('./serverbundle');
bundle.configRoutes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
