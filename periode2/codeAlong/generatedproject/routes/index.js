var express = require("express");
var router = express.Router();



/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express", besked: "Hi class" }); // sender objekt med properties.
});

router.get("/ny", function(req, res, next) {
  res.render("ny", { title: "Cool Page", besked: "Hi class" }); // sender objekt med properties.
});

module.exports = router;
