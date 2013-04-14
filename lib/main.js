var express = require('express')
  , app     = module.exports = express()
  ;

app.get('/', index);

function index(req, res, next) {
  res.send('Well hello there');
}
