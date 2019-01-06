var burger: string = "hamburger", // String
    calories: number = 300, // Numeric
    tasty: boolean = true; // Boolean

function speak(food: string, energy: number): void {
    console.log('our ' + food + ' has ' + energy + ' calories');
};

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

speak("ice_cream", 200);

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