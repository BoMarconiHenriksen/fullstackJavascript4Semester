// Fra slide: http://slides.mydemos.dk/promises/promises.html#9

// Funktion der returner et promise
let promiseFactory = function(msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //To demonstrate an async call
      var ok = true; // simulates the result of the operation
      if (ok) {
        resolve(msg.toUpperCase());
      } else {
        reject("UPPPPs");
      }
    }, delay);
  });
};

//   let p = promiseFactory("Msg from Promise",SOME_DELAY);
// Ændrer ok til false for at teste catch blokken virker.

// Lav en liste.
// Sekvientiel
/* 
let result = [];

promiseFactory("Msg from Promise", 2000)
.then(d=> { //Er der en af vores promises der fejl ryger vi ned i catch blokken. Ændre ok til false. Læg mære til tiden.
    result.push(d);
    return promiseFactory("Hello, Hello", 3000);
})
.then(d=> {
    result.push(d);
    return promiseFactory("Hello class", 4000);
})
.then(d=> {
    result.push(d);
    return promiseFactory("Hello, Hell", 1000);
})
.then(d=> {
    result.push(d);
    console.log('All:' + result.join(", "));
})
.catch(err =>console.log('UPPS')) 
*/

// Der er ingen grunde til at vente som der gøres ved ovenstående.
// Få resultater i samme rækkefølge - Parallel
// Kan godt lave fetch herinde.
// Tager ikke 16 sekunder men ca 7 sekunder
/* 
let promises = [promiseFactory("A", 6000), promiseFactory("B", 5000), promiseFactory("C", 5000)];

Promise.all(promises)
.then(allResultes => {
    console.log(allResultes);
})

.catch(err =>console.log('UPPS')) 
*/

// Fetch - OBS!!! Er ikke en del af js, men browser(web API)
// Lav en package.json med npm init -y OBS!!! -s behøves ikke mere
// npm install -s node-fetch
// type package.json OBS!!! Se at den er i package

// Hurtig test på api
/* 
const fetch = require("node-fetch");

fetch("http://swapi.co/api/people/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err)) 
*/

// Laves som liste
const fetch = require("node-fetch");

let swappiPromises = [];
for (let i = 0; i < 50; i++) {
  const p = fetch("http://swapi.co/api/people/" + i).then(res => res.json()) //+1 henter en mere osv
    swappiPromises.push(p);
}
Promise.all(swappiPromises)
.then(all => {
    const names = all.map(person => person.name).join(", ");
    console.log(names);
})
