const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//returns the module.export object - so pick the prop off of it
const dbKey = require('./config/keys').mongoURI;

mongoose
  .connect(dbKey)
  .then(() => console.log('DB Connection successful'))
  .catch(err => console.log(err));

//middleware posts
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport config
require('./config/passport')(passport);

//middleware router
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

//passport
app.use(passport.initialize());

app.listen(3000, () => console.log('server listening on port 3000'));
