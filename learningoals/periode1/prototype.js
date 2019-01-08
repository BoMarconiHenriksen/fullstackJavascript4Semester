// Prototype.
// Vi kan tilføje funktioner til prototypen af et objekt.

// Når en funktion laves så tilføjes et prototype-objekt til funktionen <function>.prototype.
// console.log(typeof Person.prototype);

// Udkommenter.
function showName() {
    console.log('The name of the person is ' + this.firstName + ' ' + this.lastName);
}; 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.show = showName; // Udkommenter.
};

/* Person.prototype.showName = function() {
    console.log('The name of the person is ' + this.firstName + ' ' + this.lastName);
}; */

// Instance af Person.
let person1 = new Person('Flemming', 'Poulsen');
person1.show(); // Ændre til showName().

// OBS! Hver gang vi laver en instance så laves også en showPerson instance i memory.
// Løsningen er at bruge prototype.

// En konstruktør funktion har en prototype property, der referer til et objekt. 
// Det objekt bliver prototypen til alle instancer, der bliver lavet med konstruktøren.
// Vi kan tilføje nye funktioner og properties til det objekt som vil blive delt af alle instancer.



