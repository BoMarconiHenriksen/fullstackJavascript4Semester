"use strict";
// https://www.youtube.com/watch?v=0ChtcZmb3dI
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHello = function () {
        console.log('Hello' + name);
    };
    return Greeter;
}());
function sortByName(a) {
    // a er nu deklareret som Person array.
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
