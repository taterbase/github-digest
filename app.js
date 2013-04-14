var express = require('express')
  , app     = express()
  , config  = require('./config')
  ;

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.cookieSession({secret: config.sid}));

app.set('view engine', 'jade');

app.use(require('./lib/auth'));
app.use(require('./lib/main'));

app.listen(3000);
