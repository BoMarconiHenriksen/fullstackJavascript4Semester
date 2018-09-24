var express = require("express");
var router = express.Router();
var debug = require("debug")("demo:routes-index"); // tilføjet 1

/* GET home page. */
router.get("/", function(req, res, next) {
  debug("Handling /"); // tilføjet 1
  res.render("index", { title: "Express" });
});

module.exports = router;
