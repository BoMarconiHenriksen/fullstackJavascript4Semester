var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/joke", function(req, res, next) {
  //res.send("Ha ha ha"); //t2
  //res.json({ joke: "This is a joke" }); // returner json

  // Ved error. I app.js - middleware håndter exception
  throw new Error("ups");
  res.status(500).json({ joke: "This is a joke" });
});

module.exports = router;
