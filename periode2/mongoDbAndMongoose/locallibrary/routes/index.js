var express = require('express');
var router = express.Router();

// GET home page. Redirect to the new homepage.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;
