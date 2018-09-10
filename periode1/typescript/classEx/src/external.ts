// Kode der er lavet andre steder
// npm install lodash
//Få typer med: npm install @types/lodash
import _ from "lodash";

let numbers: Array<number> = [1, 2, 3, 5, 6, 8];

let numb2 = _.shuffle(numbers);
console.log(numb2);
