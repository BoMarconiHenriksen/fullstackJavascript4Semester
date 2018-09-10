

function logger(a: any, b: any) {
    console.log(`Value: 1: ${a}, Value 2: ${b}`);
}

var a = 1, b = "Hello";
logger(a, b); // Value: 1 Value: Hello

// Skal kun kunne tage number og string
function logger2(a: number, b: string) {
    console.log(`Value: 1: ${a}, Value 2: ${b}`);
}

logger2(a, b);

interface IPerson { name: string };
interface IAddress { street: string };

function logger3(a: IPerson, b: IAddress) {
    console.log(`Value: 1: ${a}, Value 2: ${b}`);
}

logger3({name: "Kurt"}, {street: "Lyngbyvej 34"});

// Hvad er problemet med ovenstående?
// Alle funktioner logger er næsten de samme. De kan refaktores eller brug generics.
// Alle 3 logger metoder gør det samme, men har forskellige navne.

// Refaktoreres til klasser.
class Person implements IPerson {
    constructor(name: string) {
        this.name = name;
    }
    name: string;

}

class Address implements IAddress {
    street: string;
    constructor(address: string) {
        this.street = address;
    }
    
}

let person = new Person("Kurt");
let address = new Address("Hovedvejen 123");
logger3(person, address);

// Refaktores til generics funktion.
function logger4<T, U>(a: T, b: U) { // T og U = de typer jeg vil arbejde med.
    console.log(`Value: 1: ${a}, Value 2: ${b}`);
}

// Tager typen som vi putter ind her.Ikke den bedste løsning.
logger4(a, b);

// Refactor med generics.
class GenericLogger<T, U> {
    log = (a: T, B: U) => console.log(`Value: 1: ${a}, Value 2: ${b}`);
}

var logger5 = new GenericLogger<IPerson, IAddress>();
var logger6 = new GenericLogger<number, string>();
logger6.log(1, "Hello");

