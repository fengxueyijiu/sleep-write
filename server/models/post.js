var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  title:String,
  content:String
});
module.exports = mongoose.model('Peter', userSchema);
