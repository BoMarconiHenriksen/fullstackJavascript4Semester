// ARROW FUNCTIONS
// Kortere syntaks.
function plus(a, b) {
    return a + b;
};
  
let exampelTwo = (a, b) => a + b; 

// console.log(plus(2,2));
// console.log(exampelTwo(2,2));


// Implicit return.
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

// console.log(materials.map(material => material.length));  // expected output: Array [8, 6, 7, 9]


// this.
// En arrow funktion binder ikke this.
const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    
    fullName: function() {
      return console.log(this.manufacturer + ' ' + this.model);  
    }
  };

// car.fullName(); // Ford Fiesta

// En arrow funktion har ikke sin egen this som en almindelig funktion har.
const carArrow = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
      return console.log(this.manufacturer + ' ' + this.model);  
    }
  };

// carArrow.fullName(); // undefined undefined

// this går et scope op i dette eksempel, og bruge this som den finder der.
var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id);
      }, 1000);
    }
  };

// obj.counter();
