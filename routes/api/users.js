const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

// @route GET api/users/users
// @desc tests users route
// @access Public
router.get('/test', (req, res) => {
  res.json({ message: 'users work' });
});
// @route GET api/users/register
// @desc Registers a user
// @access Public
router.post('/register', (req, res) => {
  // check with Mongo if email - hence user exists
  User.findOne({ email: req.body.email }) //force break
    .then(user => {
      if (user) {
        //return a 400 - user already registered
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', //size
          r: 'PG', //rating
          d: 'mm' //default
        });
        //create a new user resource
        //construct a mongoose model instance
        const user = new User({
          name: req.body.name,
          password: req.body.password,
          avatar,
          email: req.body.email
        });

        //we need to encrypt the password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            //assign the hashed password
            user.password = hash;
            //save the resource
            user
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

module.exports = router;
