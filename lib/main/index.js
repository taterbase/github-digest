var express = require('express')
  , app     = module.exports = express()
  ;

app.set('views', __dirname + '/views');

app.get('/', index);

function index(req, res, next) {
  res.locals.user = req.user;
  res.render('index');
}
