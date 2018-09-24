var express = require("express");
var router = express.Router();
var getRandomJoke = require("../model/jokes");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

// Random jokes
/* router.get("/random_joke", function (req, res, next) {
  let counter = req.session.jokeCounter;
  req.session.jokeCounter = counter++;

  let theJoke = getRandomJoke.getRandomJoke();
  
  res.render("random_joke", {
    title: "Random Joke",
    joke: theJoke
  });
});

// All jokes
router.get("/all_jokes", function (req, res, next) {
  let counter = req.session.jokesCounter;
  req.session.jokesCounter = counter++;
  let allJokes = getRandomJoke.getAllJokes();

  res.render("all_jokes", {
    title: "All Jokes",
    allJokes: allJokes
  });
});

// Add a joke
router.get("/add_joke", function (req, res, next) {
  let counter = req.session.storeJokeCounter;
  req.session.storeJokeCounter = counter++;

  let numberOfJokes = getRandomJoke.countJokes();

  res.render("add_joke", {
    title: "Add Joke",
    countJokes: numberOfJokes
  });
});

router.post("/add_joke", function (req, res, next) {
  let newJoke = req.body.theNewJoke; // theNewJoke er værdien af name fra viewet add_joke.ejs.

  getRandomJoke.addJoke(newJoke);
  let numberOfJokes = getRandomJoke.countJokes();

  res.render("add_joke", {
    title: "Add Joke",
    countJokes: numberOfJokes
  });
});

router.get("/login", function (req, res, next) {
  res.render("login", {
    title: "Login"
  });
}) */

module.exports = router;