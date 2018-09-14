/* 
Use fetch and async/await to complete fetchPerson(..)below. 
When implemented, each line in printNames() must be executed “sequentially”. 
Verify this with the debugger. 
*/

/* const fetch = require("node-fetch");

const URL = "https://swapi.co/api/people/";
 
function fetchPerson(url){
    return fetch(url).then(res => res.json()
);
}
async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2); // Venter på at ovenstående fetch er færdig. Derfor sequentiel.
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}

printNames(); */

/* 
Fix the problem above, so that HTTP-requests are made in parallel.
*/

/* 
FØRST!!! HER ER FETCH ET ALMINDLIGT PROMISE!!!
*/
const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/1";

// Eneklt fetch - fetch returner et reponse, der indeholder et response objekt.
fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson)); // Kommer ud som en string.
  });

// Fetch med error handling.
// For at tjekke at et fetch er succefuldt start med at tjekke at promise er resolvet.
// Derefter tjek at Response.ok property er true.
const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/1";
fetch(URL)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was NOT ok!");
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson)); // Kommer ud som en string.
  })
  .catch(function(error) {
    console.log("Fejl ved fetch: " + error.message);
  });


const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/";

function fetchPerson(url) {
  return fetch(url).then(res => res.json());
}
async function printNames() {
  try {
    console.log("Before");
    /* const person1Promise = fetchPerson(URL + 1);
    const person2Promise = fetchPerson(URL + 2);
    const person3Promise = fetchPerson(URL + 3);
    const person4Promise = fetchPerson(URL + 4);
    const person5Promise = fetchPerson(URL + 5); */

    var result = await Promise.all(
      [fetchPerson(URL + 1)],
      [fetchPerson(URL + 2)],
      [fetchPerson(URL + 3)],
      [fetchPerson(URL + 4)],
      [fetchPerson(URL + 5)]

      
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

// printNames();

const fetch = require("node-fetch");
 async function serial(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe the await 
      await fetch("https://swapi.co/api/people/" + i)
        .then(res => { return res.json() }));
  }
  console.log(swappiPeople.map(p=>p.name).join(", "));
}
 async function parallel(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      
      fetch("https://swapi.co/api/people/" + i)
        .then(res => { return res.json() }));
  }
  const allEntries = await Promise.all(swappiPeople);
  console.log(allEntries.map(p=>p.name).join(", "));  
  
}
//Time each of the two strategies
serial(15);
parallel(15);
