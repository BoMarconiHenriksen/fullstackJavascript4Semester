import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


class Person {
  constructor(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
  }
 }

const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
]


const cities = [
  {city: "Lyngby",zipCode: "2800"},
  {city: "Hvidovre",zipCode: "2650"},
  {city: "Glostrup",zipCode: "2600"},
 ]
 
const hobbies = [
  {name: "football",players: 22},
  {name: "chess",players: 2},
  {name: "boxing",players: 2},
 ]
 

const personTable = makeTable(persons);
document.getElementById('persons').innerHTML = personTable;

const cityTable = makeTable(cities);
document.getElementById('cities').innerHTML = cityTable;

const hobbyTable = makeTable(hobbies);
document.getElementById('hobbies').innerHTML = hobbyTable;


function makeTable(data){
  let headers = _.keys(data[0]);
  let tableHeader = headers.map(header => `<th> ${_.startCase(header)} </th>`).join("");
  let tableBody = data.map((obj) => "<tr>" + headers.map((header) => `<td>${obj[header]}</td>`).join("") + "</tr>").join("");
  return `<table class="table w-50"> 
          <thead class="thead-light"><tr>${tableHeader}</tr></thead>
          <tbody class="table table-striped">${tableBody}</tbody>
          </table>`;
  

}
