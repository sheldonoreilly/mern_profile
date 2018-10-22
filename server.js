const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const path = require('path');

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

//serve static assests in production
//in prod we dont have a server on the client (react dev server)
//we instead use this one for client serves as well
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  //take everything other than listed '/api/...' routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server OK, listening on port ${port}`));
