// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
var Student = /** @class */ (function () {
    function Student(firstName, midleInitial, lastName) {
        this.firstName = firstName;
        this.midleInitial = midleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + midleInitial + " " + lastName;
    }
    return Student;
}());
// For at undgå at der er flere functions i global scope.
// export{};
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
