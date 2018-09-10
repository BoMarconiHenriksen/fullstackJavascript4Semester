// Static types.

var burger: string = "hamburger", // String
    calories: number = 300, // Numeric
    tasty: boolean = true; // Boolean

function speak(food: string, energy: number): void {
    console.log('our ' + food + ' has ' + energy + ' calories');
}

speak(burger, calories);

// Her definer vi food interfacet. Dens properties og typer.
interface food {
    name: string;
    calories: number;
}

// Vi definer et objekt, som har all properties af food som interfacet forventer.
// Vær opmærksom på at types udledes automatisk.
var ice_cream = {
    name: "ice cream",
    calories: 200
}

speak(ice_cream);

// Klasser
class Menu {
    // Vores properties.
    // Som default er de public, men de kan også være private eller protected.
    items: Array<string>; // items i klassen Menu er et array af strings.
    pages: number; // Hvor mange sider vil menuen være... et nummer.

    // Konstruktøren
    constructor(item_list: Array<string>, total_pages: number) {
        // Keywords er obligatorieske.
        this.items = item_list;
        this.pages = total_pages;
    }

    // Metoder
    list(): void {
        console.log('Our menu for today:');
        for(var i=0; i<this.items.length>; i++) {
            console.log(this.items[i]);
        }
    }
}

// Lav en ny instance af Menu klassen.
var sundayMenu = new Menu(['pancakes', 'orange juice'], 1);

// Kald list metoden.
sundayMenu.list();

// Inheritance
class HappyMeal extends Menu {
    // Properties bliver arvet.

    // Lav en ny konstruktør.
    constructor(item_list: Array<string>, total_pages: number) {
        // I dette tilfælde vil vi gerne have den samme konstruktør som i Menu.
        // For automatisk at kopier den kan vi kalde super() - en referance til forældrens konstruktør.
        super(item_list, total_pages);
    }

    // Ligesom properties så er metoderne også nedarvet.
    // Men vi vil gerne overskrive list() så vi redefiner den.
    list(): void {
        console.log('Our special menu for children: ');
        for(var i = 0; i<this.items.length>; i++) {
            console.log(this.items[i]);
        }
    }
}

// Lav en ny instance af HappyMeal klassen.
var menu_for_children = new HappyMeal(['candy', 'drink', 'toy'], 1);

menu_for_children.list();

// Generics
// Generics er templates som tillader at den samme funktion kan accepter argumenter af 
// forskellige typer. Det er bedre at bruge generics til at lave genanvendelige komponenter
// i stedet for at bruge any data typen, som generics gemmer typen af variablen, der går ind og 
// ud af variablen.

// Her er et eksempel, der modtager et argument og returner et array som indeholder det samme argument.

// <T> efter funktionens navn fortæller at det er en generic funktion.
// Når vi kalder den generiske funktion så vil alle instances af T blive erstattet
//  af den type som bliver stillet til rådighed.

// Modtager et argument af typen T.
// Returner et array af typen T.

function genericFunc<T>(argument: T): T[] { 
    var arrayOFT: T[] = []; // LAver et tomt array af type T.
    arrayOFT.push(argument); // Push, nu er arrayOFT = [argument].
    return arrayOFT;
}

var arrayFromString = genericFunc<string>('beep');
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString); // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber); // number

/* 
The first time we called the function we manually set the type to string. 
This isn't required as the compiler can see what argument has been passed and 
automatically decide what type suits it best, like in the second call. 
Although it's not mandatory, providing the type every time is considered good practice 
as the compiler might fail to guess the right type in more complex scenarios.
*/


