var fs = require('fs')
  , mongoose = require('mongoose')
  , config = require('../config')
  , models = module.exports = Object.create(null)
  ;

mongoose.connect(config.mongodb.uri);

fs.readdirSync(__dirname).forEach(function(file){

  if(!file.match(/\.js$/) || file == 'index.js')
    return;

  //Convert file to name (user.js -> User)
  var name = file.charAt(0).toUpperCase() + file.slice(1).replace(/\.js$/, '');

  //Store and create model
  models[name] = mongoose.model(name, require(__dirname + '/' + file));

});
