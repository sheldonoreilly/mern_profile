const express = require('express');
const router = express.Router();
const User = require('../../models/User');

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
      return res.status(400).json({ email: 'Email already exists' });
    });
});

module.exports = router;
