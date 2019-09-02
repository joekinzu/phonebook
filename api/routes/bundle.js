// routes for location class
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: './build/'
  });
});


module.exports = router;
