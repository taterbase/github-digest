var express = require('express')
  , app     = express()
  , config  = require('./config')
  ;

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.cookieSession({secret: config.sid}));

app.use(require('./lib/main'));
app.use(require('./lib/auth'));

app.listen(3000);
