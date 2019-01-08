// Eksempel på callback hell
const crypto = require('crypto');
var allObjects = { "title": "6 secure randoms", "randoms": [] }

// Udregner længden på de forskellige secure random.
// Når første funktion er færdig kaldes den næste osv.
/* crypto.randomBytes(48, (err, buf) => {
  if (err) throw err;
  let obj = { "length": buf.length, "random": buf.toString('hex') };
  allObjects.randoms.push(obj);
  
  crypto.randomBytes(40, (err, buf) => {
    if (err) throw err;
    let obj = { "length": buf.length, "random": buf.toString('hex') };
    allObjects.randoms.push(obj);

    crypto.randomBytes(32, (err, buf) => {
        if (err) throw err;
        let obj = { "length": buf.length, "random": buf.toString('hex') };
        allObjects.randoms.push(obj);

        crypto.randomBytes(24, (err, buf) => {
            if (err) throw err;
            let obj = { "length": buf.length, "random": buf.toString('hex') };
            allObjects.randoms.push(obj);
            console.log(allObjects); 
          });
      });
  });
}); */


/* Løsning med promise */
// Instans af en promise
/* const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Promise is created and consumed'); // 
    }, 200);
});

// Resolver promise med .then.
promise.then(value => {
    console.log(value);
}); */

// Promise error fanges med catch.
/* const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise is rejected');
    }, 200);
});

prom.catch(error => {
    console.log(error);
}); */

// Secure random med promise.
function makeSecureRandom(size) {
    return new Promise(function (resolve, reject) {
        crypto.randomBytes(size, (err, buf) => {
            if (err) {
                reject(err);
            } else {
                let obj = { "length": buf.length, "random": buf.toString('hex') };
                resolve(obj);
            }
        });
    })
}

/* function runPromises() {
    let finalObj = { "title": "6 secure randoms", "randoms": [] }
    let promises = [makeSecureRandom(48), makeSecureRandom(40), makeSecureRandom(32), makeSecureRandom(24), makeSecureRandom(16), makeSecureRandom(8)];

    // Promise.all returner et enkelt promise når alt i arrayet er resolved. 
    Promise.all(promises)
        .then(values => {
            finalObj.randoms = values;
            console.log(finalObj);
        })
        .catch(err => {
            console.log(error.message);
        });
};

runPromises(); */

// Async og error handling med try catch.
async function runAsync() {
    let finalObj = { "title": "6 secure randoms", "randoms": [] }
    let promises = [makeSecureRandom(48), makeSecureRandom(40), makeSecureRandom(32), makeSecureRandom(24), makeSecureRandom(16), makeSecureRandom(8)];
    
    // Promise.all returner et enkelt promise når alt i arrayet er resolved.
    // Vi kan bruge en alm. try catch blok.
    try {
        finalObj.randoms = await Promise.all(promises);
        console.log(finalObj);
    } catch {
        (err => {
            console.log(err.message);
        });
    };
    
};

runAsync();
