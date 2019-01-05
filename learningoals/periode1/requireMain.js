// Provide examples of user defined reusable modules implemented in Node.js
let hello = require('./require'); //Assigner vores module til dt.

function sayHello() {
    console.log(hello.greetingFromModule);
};

sayHello();
