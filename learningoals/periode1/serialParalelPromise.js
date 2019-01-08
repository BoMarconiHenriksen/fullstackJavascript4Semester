// Funktion der returner et promise
let promiseFactory = function (msg, delay) {
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

// Det som bliver fetches passer gennem en chain af .then handlers.
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

// Det er muligt at bruge promise.all i stedet for .then.
/* 
let promises = [promiseFactory("A", 6000), promiseFactory("B", 5000), promiseFactory("C", 5000)];
Promise.all(promises)
.then(allResultes => {
    console.log(allResultes);
})
.catch(err =>console.log('UPPS')) 
*/

// Laves som array.
/* const fetch = require("node-fetch");

// Laver et array med urler, der skal fetches.
 let swappiPromises = [];
for (let i = 0; i < 50; i++) {
    const p = fetch("http://swapi.co/api/people/" + i).then(res => res.json()) //+1 henter en mere osv
    swappiPromises.push(p);
}
// Fetcher med Promise.all().
Promise.all(swappiPromises)
    .then(all => {
        const names = all.map(person => person.name).join(", ");
        console.log(names);
    }); */
