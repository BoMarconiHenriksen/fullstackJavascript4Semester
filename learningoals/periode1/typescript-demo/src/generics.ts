// GENERICS
interface IPerson { 
    name: string 
};

interface IAddress { 
    street: string 
};

class Person implements IPerson {
  constructor(name: string) {
      this.name = name;
  }
  name: string;
};

class Address implements IAddress {
  street: string;
  constructor(address: string) {
      this.street = address;
  }
};

class GenericLogger<T, U> {
  log = (a: T, b: U) => console.log(`Value: 1: ${a}, Value 2: ${b}`);
};

var logger5 = new GenericLogger<IPerson, IAddress>();
var logger6 = new GenericLogger<number, string>();
logger6.log(5, "Hello");
