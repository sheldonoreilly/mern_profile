const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load profile model
const Profile = require('../../models/Profile');
//load user model
const User = require('../../models/User');

// @route GET api/profile/test
// @desc tests profile route
// @access Public
// router.get('/test', (req, res) => {
//   const { id } = req.body;

// @route GET api/profile/test
// @desc Get current user's profile
// @access Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //errors
    const errors = {};
    //destructure
    const { id } = req.user;
    /* we have a reference in Mongo to the user through the Profile Schema
   Profile.user property
  */
    Profile.findOne({ user: id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user.';
          return res.status(404).json(errors);
        }
        //we have a hit
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);
module.exports = router;
