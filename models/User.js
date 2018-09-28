const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

//export User Model returned from mongoose
module.exports = User = mongoose.model('users', UserSchema);
