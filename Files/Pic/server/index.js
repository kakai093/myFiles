const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const Message = require('./model.js');

const app = express();
const PORT = 3020;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/sendMessage', function() {
  console.log('You are now connected to the database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>
  res.send('happy to be here'));

app.get('/messages', (req, res) => {
  Message.find({}).sort({createdAt: -1})
    .exec()
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => {
      res.send(err.toString());
    });
 });

 app.post('/message', (req, res) => {
  let newMessage = new Message();

  newMessage.title = req.body.title;
  newMessage.image = req.body.image;

  newMessage.save((err, message) => {
    if(err) {
      res.send('error saving message');
    } else {
      console.log('Message save');
      console.log(message);
      res.send(message);
    }
  })
});




app.listen(PORT, function() {
  console.log('App is now listening on http://localhost:'+PORT);
})
