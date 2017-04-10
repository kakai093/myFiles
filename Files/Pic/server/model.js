const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  title: {type: String, required: true},
  image: {type: String},
  createdAt: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Message', MessageSchema);
