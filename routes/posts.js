const express = require('express');
const router = require('router');

router.get('test', (req, res) => {
  req.json({ message: 'user works' });
});

module.exports = router;
