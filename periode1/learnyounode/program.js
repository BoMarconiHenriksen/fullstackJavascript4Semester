// Opg 1
// console.log('HELLO WORLD');

// console.log(process.argv);

// Baby step
// Kun hvis command-line er tal
/* var result = 0
 
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])
 
console.log(result) */

/* Command-line indeholder tal og bogstaver
a is the previous value, 
b is the current value,  
c is the index. 

var sum = process.argv.reduce(function (a, b, c) {
    if (c >= 2 && !isNaN(b)) {
      return +a + +b // + konverter string til int
    } else if (c >= 2) {
       return +a + 0;
    } else {
       return 0;
    }
  })
   
  console.log(sum) */

//   Opg 3 - My first I/O
/* var fs = require('fs')  
       
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)

// En anden mulighed
fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 */

// Opg 4 - MY FIRST ASYNC I/O! (Exercise 4 of 13)

var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})

// For at undgå callback hell

/*
var fs = require('fs')
var lines = undefined

// Get the number of lines with a callback
function getLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    lines = fileContents.split('\n').length - 1
    callback()
  })
}

// Printer antallet af linjer i filen til consollen.  
function logLines() {
  console.log(lines)
}
 
// Giver mulighed for at pass et nummer som 4. argument i command linjen.
function magicNumber() {
  var number = +process.argv[3]
  if (lines >= number){
    console.log('This file has '+number+ ' or more lines')
  } else {
    console.log('This file does not have '+number+' or more lines')
  }
}
 
// Passes logLines og magicNumber til getLines funktionen.
// Når getLines er færdig med at læse en fil så kalder den begge funktioner,
// Så de kan udfører deres job ifm getLines.
getLines(logLines)
getLines(magicNumber) */

