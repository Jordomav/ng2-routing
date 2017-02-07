var mongoose = require('mongoose');

let User = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String},
  username: {type: String, unique: true, required: true},
  email: {type: String, required: true, index: true, unique: true},
  phone: {type: String},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
});

mongoose.model('User', User);
