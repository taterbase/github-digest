var express = require('express')
  , app     = module.exports = express()
  ;

app.get('/auth', auth);

function auth(req, res, next) {
  res.send('Coming soon');
}
