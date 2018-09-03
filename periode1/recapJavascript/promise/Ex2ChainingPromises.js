/* 
Now, Implement a method getPlanetforFirstSpeciesInFirstMovieForPerson(id){} which for id = 1 (Luke Skywalker) should log this info:

Name: Luke Skywalker
First film: The Empire Strikes Back
First species: Yoda's species
Homeworld for Specie: unknown

*/
const fetch = require("node-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  
    const URL = "https://swapi.co/api/people/";

    fetch(URL + id).then(res => res.json())
    .then(res => {
        const n = JSON.parse(res);
        console.log(n);
        fetch(n.films[0]).then(res => res.json())
        const f = JSON.parse(res)
        //fetch(f.species[0]).then(res => res.json())

    })
   

    //const f = fetch(n.films[0]).then(res => res.json());
    

    /* const s = fetch(f.species[0]).then(res => res.json());
    

    const p = fetch(s.homeworld).then(res => res.json());
    return (
        "Name: " +
        n.name +
        ", Title: " +
        f.title +
        ", Specie: " +
        s.name +
        ", Planet: " +
        p.name
      ); */
    
  }


// .then resolver værdien af promise. Hvis .then returner et promise så er det,
// det næste .then der resolver værdien
// https://stackoverflow.com/questions/38884522/promise-pending
let starWarsInfo = getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
starWarsInfo.then(function(result) {
  console.log("Uden await: " + result);
}); 

// Async Await ex. 3
/* 
In promise-exercise 2, you implemented a method:
getPlanetforFirstSpeciesInFirstMovieForPerson(id)

Implement a new version of this method, that should use the much cleaner syntax of async-await:
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id)

Make sure to implement proper error handling when you test the method.
*/

/* async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  try {
    const URL = "https://swapi.co/api/people/";

    const n = await fetch(URL + id).then(res => res.json());
    const f = await fetch(n.films[0]).then(res => res.json());
    const s = await fetch(f.species[0]).then(res => res.json());
    const p = await fetch(s.homeworld).then(res => res.json());
    return (
      "Name: " +
      n.name +
      ", Title: " +
      f.title +
      ", Specie: " +
      s.name +
      ", Planet: " +
      p.name
    );
  } catch (err) {
    console.log(err);
  }
}

let starWarsInfo2 = getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
starWarsInfo2.then(function(result) {
  console.log("Med await: " + result);
}); */

// Eks på hvis .then returner et promise så er det,
// det næste .then der resolver værdien
/* 
function initPromise() {
  return new Promise(function(res,rej) {
    res("initResolve");
  })
}
initPromise().then(function(result) {
    console.log(result); // "initResolve"
    return new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("secondPromise");
       }, 1000)
   })
})
.then(function(result) {
    console.log(result); // "secondPromise"
});
*/
