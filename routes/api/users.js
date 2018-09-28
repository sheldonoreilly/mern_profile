const express = require('express');
const router = express.Router();

// @route GET api/profile/users
// @desc tests users route
// @access Public
router.get('/test', (req, res) => {
  res.json({ message: 'users work' });
});

module.exports = router;
