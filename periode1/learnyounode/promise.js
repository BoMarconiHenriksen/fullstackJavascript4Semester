// Hjælp node api i browser.
// Opg. 5 - Filtered LS.
const fs = require('fs');
const path = require('path');
const readDirFiltered = require('./promiseFilter.js');

const pathToDir = process.argv[2]; // Stien til det vi vil have fat i.
const filterPath = '.' + process.argv[3];
const ext = '.' + process.argv[3];

/* fs.readdir(pathToDir, (err, data) => {
    if(err) {
        throw new Error("UPS")
    }
    var files = data.filter((fileName) => {
        if(path.extname(fileName) === filterPath) {
            console.log(files);
        }
    })
}); */



// Lav det 
var files = readDirFiltered(pathToDir, ext, (err, data) => {
    if(err) {
        throw new Error("UPS")
    }
    console.log(data);
})


// Lav det som promise uden callback. 