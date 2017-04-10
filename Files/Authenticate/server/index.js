const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model.js');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const bcrypt   = require('bcrypt-nodejs');

const app = express();
const PORT = 3020;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/jwt-try', function() {
  console.log('You are now connected to the database');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressJWT({secret:'shhh secret'}).unless({path:['/register','/login']}));


app.post("/register", function(req,res) {

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  if (!req.body.username) {
    res.status(400).send("Username Required");
    return;
  }
  if (!req.body.password) {
    res.status(400).send("Password Required");
    return;
  }

  user.save(function(error, user) {
    if (error) throw new Error(error);
    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        password: user.password
      });
    }
  })
});

app.post('/login', function(req, res) {
  if (!req.body.username) {
    res.status(400).send("Username Required");
    return;
  }
  if (!req.body.password) {
    res.status(400).send("Password Required");
    return;
  }
  User.findOne({username: req.body.username}, function(error, user) {
    if (user) {
        console.log(user);
        bcrypt.compare(req.body.password, user.password, function(error, isMatch) {
          if(isMatch) {
            const token = jwt.sign({ username: req.body.username }, 'shhh secret');
            res.status(201).json({
              token: token,
            });
          }
          else {
            res.status(401).send("Invalid Password");
          }
        });
    }
    else {
      res.status(401).send("Invalid Username");
    }
  });
});


app.post('/dashboard', function (req, res) {
  res.send('hello world')
});


app.listen(PORT, function() {
  console.log('App is now listening on http://localhost:'+PORT);
})
