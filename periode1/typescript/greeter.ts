// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

class Student {
  fullName: String;
  constructor(
    public firstName: string,
    public midleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + midleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

// For at undgå at der er flere functions i global scope.
// export{};
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
