var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String },
    email : { type : String },
    age:{ type: Number }
  }
);
module.exports = mongoose.model('Strom', UserSchema);
