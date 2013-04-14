var Schema = require('mongoose').Schema;

var UserSchema = new Schema({

  gid: {
    required: true,
    type: Number
  },

  username: {
    required: true,
    type: String
  }

});

module.exports = UserSchema;
