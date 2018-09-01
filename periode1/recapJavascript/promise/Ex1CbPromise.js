/* 
Wrap a callback based design in a promise, so you can use it with the .then notation (and later, with async/await)
In this exercise you must create a design to produce an object with 6 secure randoms as sketched below:

{
    "title": "6 Secure Randoms",
    "randoms": [
      {"length": 48,"random": "A string with 48 random hex-characters"},
      {"length": 40,"random": "A string with 40 random hex-characters"},
      {"length": 32,"random": "A string with 32 random hex-characters"},
      {"length": 24,"random": "A string with 24 random hex-characters"},
      {"length": 16,"random": "A string with 16 random hex-characters"},
      {"length": 8,"random":  "A string with 8 random hex-characters"}
    ]
  }

The 6 strings must be presented in the order given.
*/

//   Nodes built in crypto module. The asynchronous version.
require("crypto").randomBytes(SIZE, function(err, buffer) {
  let secureHex = buffer.toString("hex");
});
