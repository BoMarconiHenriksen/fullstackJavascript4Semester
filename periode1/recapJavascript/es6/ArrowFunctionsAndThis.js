// Arrow functions and this.
/* 
Use the Constructor function in the example below, to explain about the ES5 this-behaviour. 
Execute the example, and solve the problem, first using ES5 features, 
and then using an es2015 arrow function. 

function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    });
  }
  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log(numbers.fives);
*/

function Numbers(numbs) {
  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(
    function(v) {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    }.bind(this) // Du binder
  );
}
let numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);
//console.log(numbers.map(number => numbers.push));

/* 
Ex. 3B.

Rewrite the inc() function to use the arrow notation, and test whether this; 
solves the problem, makes it worse or leaves it unchanged.
Hint: https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/
*/

var counter = {
  count: 0,
  inc: function() {
    this.count++;
  }
};
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

/* var counter = {
  count: 0,
  inc: function() {
    this.count++;
  }
};

var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
 */
