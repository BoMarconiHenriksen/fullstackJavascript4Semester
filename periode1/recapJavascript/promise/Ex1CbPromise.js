/* 
Promises Ex. 1
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

  var secureNumberObject = {
    title: "6 Secure Randoms",
    randoms: [
      { length: 48, random: "" },
      { length: 40, random: "" },
      { length: 32, random: "" },
      { length: 24, random: "" },
      { length: 16, random: "" },
      { length: 8, random: "" }
    ]
  }
  
//   Nodes built in crypto module. The asynchronous version.
 
require("crypto").randomBytes(48, function(err, buffer) {
  if (err) {
    console.log("ERROR!!!");
  } else {
    let secureHex = buffer.toString("hex");

    secureNumberObject.randoms[0].random = secureHex;
    console.log('OBJECT ' + Object.values(secureNumberObject.randoms[0]));
    require("crypto").randomBytes(40, function(err, buffer) {
      if (err) {
        console.log("ERROR2");
      } else {
        let secureHex2 = buffer.toString("hex");
        secureNumberObject.randoms[1].random = secureHex2;
        console.log('OBJECT2 ' + Object.values(secureNumberObject.randoms[1]));
      }
    });
  }
}); 


/* 
Use es2015 Promises to solve the problem.
Hints: 
Create a function makeSecureRandom(size) that returns a promise, using the callback based design,
provided by the randomBytes(..) method.
Since the result from one calculation does not influence the next (only order matters), 
use Promise.all(..) to execute the operations in parallel.
*/

function makeSecureRandom() {
  
}

let promiseArray = { makeSecureRandom(48) }



// Eksempel på callback hell
function compute_first_parameter(cb) {
  cb(42);
}
function compute_second_parameter(cb) {
  cb(10);
}
function compute_sum(a, b, cb) {
  cb(a + b);
}

function compute_a_result() {
  compute_first_parameter(function(x) {
    compute_second_parameter(function(y) {
      compute_sum(x, y, function(result) {
        console.log(result); // 52
      });
    });
  });
}
