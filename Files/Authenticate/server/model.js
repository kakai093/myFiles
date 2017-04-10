
const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const user_schema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
});

user_schema.pre('save', function(next) {
   if(this.password) {
       const salt = bcrypt.genSaltSync(10)
       this.password  = bcrypt.hashSync(this.password, salt)
       
   }
   next()
});

module.exports = mongoose.model('User', user_schema);
