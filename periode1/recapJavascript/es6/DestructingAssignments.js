/* 
Ex. 7.

EX7 Destructing Assignment
A) Given these declarations: let fName = "Kurt", lName = "Wonnegut";

Implement a one-liner (using Array matching) to swap the two values so this statement:
console.log(`First: ${fName}, Last: ${lName}`);
Will print: First: Wonnegut, Last: Kurt
*/

let fName = "Kurt", lName = "Wonnegut";

[fName, lName] = [lName, fName];
console.log(`First: ${fName}, Last: ${lName}`);
