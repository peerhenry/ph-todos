var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var port = 8080;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(favicon(path.join(__dirname, 'client/public/favicon.ico')));
app.use(express.static(path.join(__dirname, 'client/public/js/libs'))); // use to serve js
app.use(express.static(path.join(__dirname, 'client/public/css'))); // use to serve js
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'client/public/views/index.html'));
});

var bundle = require('./bin/serverbundle');
bundle.configRoutes(app);

app.listen(port, 'localhost', function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('dev server now listening at http://localhost:' + port);
});