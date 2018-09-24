var _jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying"
];

class Jokes {
  constructor(_jokes) {
    this._jokes = _jokes;
  }

  getRandomJoke() {
    var randomJoke = _jokes[Math.floor(Math.random() * _jokes.length)];
    return randomJoke;
  }

  getAllJokes() {
    let allJokes = _jokes.map(function(joke) {
      //return <li>{joke}</li>;
      return joke;
    });
    return allJokes;
  }

  countJokes() {
    return _jokes.length;
  }

  addJoke(joke) {
    _jokes.push(joke);
  }
}

module.exports = new Jokes();
