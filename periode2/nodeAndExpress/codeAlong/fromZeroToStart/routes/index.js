var express = require("express");
var router = express.Router();

/* GET home page. */
/* Gets the router instance
It performs a get(..) on the router
It exports the router */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
