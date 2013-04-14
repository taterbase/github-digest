var express = require('express')
  , app     = express()
  ;

app.use(require('./lib/main'));
app.use(require('./lib/auth'));

app.listen(3000);
