// https://www.youtube.com/watch?v=0ChtcZmb3dI

/* 
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });
    return result;
} 
*/

// Dette er typisk javaScript. Funktionen kan kaldes og alt kan skrives som parameter.
// sortByName(5) // Dette vil give en fejl, da det skal være strings.

// Dette er typeScript syntaks.
interface Person {
  name: string;
  age: number;
}

class Greeter {
  name: string;
  sayHello() {
    console.log("Hello" + name);
  }
}

function sortByName(a: Person[]) {
  // a er nu deklareret som Person array.
  var result = a.slice(0);
  result.sort((x, y) => {
    return x.name.localeCompare(y.name);
  });
  return result;
}

sortByName([]);

// Non nullabletypes example. Turn strick mode to true in tsconfig.json file.
//? means optionally parameter.
function countLines(text?: (string | null)[]): number {
  let count = 0;
  if (text) {
    for (const line of text) {
      if (line && line.length !== 0) {
        count = count + 1;
      }
    }
  }
  return count;
}

let a = countLines(["one", "two", "three"]);
let b = countLines(["hello", null, "world"]);
let c = countLines();

// Another non nullable example
function test(s: string | string[] | null | undefined) {
  if (s) {
    s;
  }

  else {
    // What is the type here?
    // it is string or null or undefined because the string could have been empty
    s;
  }

  if (typeof s === "object") {
    // type of null is object in javascript.
    s;
  }
  else {
    s;
  }

  if ( s == undefined) {
    // == checks for both null and undefined if its === its only undefined that can pass here.
    s;
  }
  else {
    s;
  }

  if (typeof s === "undefined") {
    s;
  }
  else {
    s;
  }
}

// Descriminatig union types example.
abstract class Shape {
  abstract getArea(): number;
};

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea() {
    return Math.PI = this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(public w: number, public h: number) {
    super();
  }
  getArea() {
    return this.w * this.h;
  }
}

class Square extends Shape {
  constructor(public size: number) {
    super();
  }
  getArea() {
    return this.size ** 2;
  }
}

const shape: Shape = new Circle(10);
const area = shape.getArea();

// The same kind of code but in a functional style with typeScript!!!
// A ShapeTwo is a thing that can have 3 diffrent layout.
// There is a kind property that is discriment and the kind says: what kind of shape are you?
// Enable literals types. circle is a type ect.
// with this kind og code you dont need classes.

// Takes a function of object which should never occur and throws an exception.
function assertNever(obj: never) {
  throw new Error("Unexpected object");
}

type ShapeTwo = 
  { kind: "circle", radius: number } |
  { kind: "rectangle", w: number, h: number } |
  { kind: "square", size: number };

  function getArea(shapeTwo: ShapeTwo) {
    switch(shapeTwo.kind) {
      case "circle":
        return Math.PI * shapeTwo.radius ** 2;
      case "rectangle":
        return shapeTwo.w * shapeTwo.h;
      case "square":
        return shapeTwo.size ** 2;
    }
    // If we forget one the checker comes up and give an error!
    assertNever(shapeTwo)
    // throw new Error("Invalid shape"); // dont need it because of the asserNever function.
  }

const shapeTwo: ShapeTwo = { kind: "circle", radius: 10 };
const areaTwo = getArea(shapeTwo);
