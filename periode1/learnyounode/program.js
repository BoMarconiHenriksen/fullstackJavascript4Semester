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

/* var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
}) */

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

// Opg. 5 - Filtered LS

/* 
Create a program that prints a list of files in a given directory,
filtered by the extension of the files.

For at få en files type(dvs det efter . eks. .txt), så findes der et modul, der
hedder path som man kan bruge.
*/

/* var fs = require('fs')
var path = require('path')

// 3. og 4. index af det globale process objekt får hver sin variabel.
var folder = process.argv[2]
var ext = '.' + process.argv[3]

//readdir() fra fs modulet tager folder og en callback som argumenter.
// callbacken tager error og files som argumenter.
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err) // hvis der er fejl skrives en fejl besked
  files.forEach(function(file) { // forEach tager en callback som argument, som tager file som argument.
      // filen bliver passed til funktionen fra files.forEach metoden, som får filen fra fs.readdir() funktionen.
      // Hvis path fra file er lig med variablen ext, så bliver file logged i consollen.
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})  */

// En lidt mere brugbar løsning

/* var fs = require('fs')
var path = require('path')
 
var dir = process.argv[2]
var filterStr = process.argv[3]
 
function getFiles(dir, filterStr, callback) {
 
  fs.readdir(dir, function (err, list) { // fs.readdir() funktion kalder callback funktionen når den er færdig og giver den en list.
    if (err) // hvis fejl printes fejlen til consollen.
      return callback(err)
 
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr // Det som matcher variablen .filterStr returnes til variablen list
    })
 
    callback(null, list) // callbacken bliver kaldt og der passes null, og list. Det er callbacken fra getFiles funktionen.
  })
}
 
getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
 
  list.forEach(function (file) { // printer hvert element til consollen fra list variablen.
    console.log(file)
  })
}) */

// Opg 6 - Make it modular
/* 
Create a new module by creating a new file that just contains your
directory reading and filtering function.
*/

/* var filter = require('./filtered'); //Assigner vores module til filter.
var dir = process.argv[2]
var filterStr = process.argv[3]

// filter() kalder modul funktionen. dir, filterStr og en callback passes som argumenter.
// Callbacken modtager en list som argument.
filter(dir, filterStr, function (err, list) { // filter er variablen som er initialiseret med require('./filtered');
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) { // printer hvert element til consollen fra list variablen.
    console.log(file)
  })
}) */

// Opg 7 - HTTP client
/* 
Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Write the String contents of each
"data" event from the response to a new line on the console (stdout).

Her tager vi kun data fra 2 events data og err. Hvis der er flere events se opg. 8.
*/

/* var http = require('http')
 
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error) // on bruges til at printe data eller error fra responset til consolen.
 */

// Hvis du vil tjekke for https!
// Mangler error handling!

/* var http = require('http')
var https = require('https')
 
var url = process.argv[2]
var prefix = url.substring(0,8) // bruges til at tjekke om det er https.
 
if (prefix === 'https://'){
  https.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
} else {
  http.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
} */

// Opg. 8 - HTTP Collect
/* 
write a program that collects all data from an HTTP GET request and logs the number of characters and 
the complete string of characters received from the server.

Det er muligt at bruge 2 forskellige npm packages til at hente en hel stream af data. bl og concat-stream.
npm install bl
npm install concat-stream

Vi bruger bl
*/

/* var http = require('http');
var bl = require('bl');
 
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) { // responset fra get requesten bliver piped til bl metoden vha .pipe metoden.
    if (err)
      return console.error(err)
    data = data.toString() // Konventer buffer objektet til en string.
    console.log(data.length) // Antallet af characters fra vores response.
    console.log(data) // console log response.
  }))
}) */

// Opg. 9 - Juggling Async
/* 
Indtil videre har vi brugt syncronous operations, hvor al data returner i den rækkefølge som vi modtog det.
I node bliver al data returneret ud fra, hvornår operationen er færdig. Dvs. hvis du fetcher data fra 5 filer til et array,
og den første er 20mb og den sidste er 20kb, og resten er der i mellem. Så vil den første værdi i arrayet være den mindste fil
i stedet for den første fil, som den starter med at fetch.

Hvordan kan man få filerne i den rigtige rækkefølge? Ved at tælle callbacks.
*/

/* var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

// Løber gennem elementerne i results og printer den til consollen.
function printResults () {
  for (var i = 0; i < 3; i++) // < 3 da vi ved at vi fetcher 3 filer.
    console.log(results[i]);
};

// Tager index som argument, som bliver brugt når funktionen bliver kaldt til sidst.
function httpGet (index) {
  // + index da der er flere url input til command linen som passes til denne funktion.
  http.get(process.argv[2 + index], function (response) { 
    response.pipe(bl(function (err, data) { // Henter hele responset (body). Tager en callback, hvis der opstår en fejl.
      if (err)
        return console.error(err)
 
      results[index] = data.toString() // Konventer buffer objektet til en string og lægger det i arrayet results.
      count++ // Tæller en for hver url, der bliver lagt i arrayet.
 
      if (count == 3) // Når count er 3 så kaldes printResults().
        printResults()
    }))
  });
}

// for loopet bruges til at iterate gennem, hver command line argument i den rigtige rækkefølge.
// Det er her at den rigtige rækkefølge af commandline argumenterne startes, da den passer iterator værdien til httpGet funktionen.
for (var i = 0; i < 3; i++)
  httpGet(i); // Assigner det rigtige index til variablen i, som passes til httpGet.

 */

//  Opg 10 - Time Server
/* 
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the
first argument to your program. For each connection you must write the
current date & 24 hour time in the format:

  "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be
zero-filled to 2 integers. For example:

  "2013-07-06 17:42"

After sending the string, close the connection.
*/

/* var net = require('net')
 
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i; // Hvis i er < 10 return 0 ellers return empty string. For at få 0 foran tal under 10.
}

// Formater dato og tid vha Date() objektet.
function now () {
  var d = new Date() // date objektet assignes til variablen d.
  return d.getFullYear() + '-' // Her får det året og lægger - til.
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

// Her laver vi node TCP serveren.
var server = net.createServer(function (socket) { // Tager en callback som argument, der tager en socket.
  socket.end(now() + '\n') // socket.end lukker socketen og tager now dvs dato og tid og printer det på en ny linje til socketen.
})

// Lytter efter porten som passes som det andet command line argument.
server.listen(Number(process.argv[2]));
 */

// Hvis vi vil logge date og time til consollen brug denne.
/* var net = require('net')
var port = process.argv[2]
 
function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}
 
function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}
 
var server = net.createServer(function (socket) {
  socket.on('data', function (data) {
    console.log(data.toString())
  })
})
server.listen(port)
 
var socket = require('net').Socket()
socket.connect(port)
socket.end(now() + '\n')

// Run the above code.
node program.js 8000
 */

//  Opg. 11 - HTTP FILE SERVER
/* 
Write an HTTP server that serves the same text file for each request it
receives.

Your server should listen on the port provided by the first argument to
your program.

You will be provided with the location of the file to serve as the second
command-line argument. You must use the fs.createReadStream() method to
stream the file contents to the response.
*/

/* var http = require('http')
var fs = require('fs')
 
var port = process.argv[2]
var file = process.argv[3]
 
http.createServer(function (request, response) {
  fs.createReadStream(file).pipe(response) // stream file til memory, og passing the stream til response objektet med pipe.
}).listen(+port, function () { // Lytter til porten
  console.log('Server listening on http://localhost:%s', port) // Ved console logge her ved brugeren at den faktisk lytter i forhold til at placer det uden for metoden.
}) */

// Den oficelle løsning
/* var http = require('http')
var fs = require('fs')
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
 
  fs.createReadStream(process.argv[3]).pipe(res)
})
 
server.listen(Number(process.argv[2])) */

// Opg. 12 - HTTP Uppercase
/* 
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
  npm install through2-map
*/

/* var http = require('http');
var map = require('through2-map'); // Virker lidt ligsom map(), dog tager den bider af gangen.
 
var port = process.argv[2];

// Laver en server
http.createServer(function (request, response) {
  // checker at request metoden er POST
  if (request.method === 'POST') {
    // Skriver request status and content type til resposne head
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // stream request til through2-map med pipe()
    request.pipe(map(function (chunk) {
      // Konventer request til uppercase string
      return chunk.toString().toUpperCase()
      // stream result til response med pipe()
    })).pipe(response)
  } else {
    // Skriver method not allowed error til response header hvis method ikke er POST
    response.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})
 */

//  Den officelle løsning
/* var http = require('http')
var map = require('through2-map')
 
var server = http.createServer(function (req, res) {
 if (req.method != 'POST')
   return res.end('send me a POST\n')
 
 req.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
 })).pipe(res)
})
 
server.listen(Number(process.argv[2]))
 */

//  Opg. 13 - HTTP JSON API SERVER

/* 
 Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.

  I kommand linjen skriv: node -pe "require('url').parse('/test?q=1', true)"

  Node comands: https://nodejs.org/api/cli.html
*/

var http = require('http');
var url = require('url');
 
var port = process.argv[2];
 
// Metoden returner et objekt med hour, minute and secounds. 
// Ved at gøre det til et objekt er det let at lave det til json med JSON.stringify().
var parseTime = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
};
 
// Metoden returner et objekt med tiden i unix dvs ms.
/* function unixTime (time) {
  return {unixtime: time.getTime()}
};
 
var parseQuery = function (url) {
  // Bruger et switch statement til at parse urlen.
  switch (url.pathname) { // Fordelen ved switch er, hvis vi har flere endpoints så kan vi bruge switch til at lede urls til endpointsene.
    case '/api/parsetime':
      return parseTime(new Date(url.query.iso))
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso))
    default: return 'please enter a valid endpoint url'
  }
};
 
// Her laves serveren
http.createServer(function (request, response) {
  if (request.method === 'GET') { //Hvis request metoden fra urlen som er sendt til min server er ligmed GET
    response.writeHead(200, {'Content-Type': 'application/json'}) // så skrives status 200 og content type application/json.
    url = url.parse(request.url, true) // Her parses værdien af request.url med url.parse og assigner den til en ny variabel url.
    response.end(JSON.stringify(parseQuery(url))) // url bliver så stringifyet til et json objekt
  } else { // Hvis request metoden ikke er GET så skrives status 405 til request head og lukker responset.
    response.writeHead(405)
    response.end()
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
}); */

// Den officelle løsning
var http = require('http')
var url = require('url')
 
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}
 
function unixtime (time) {
  return { unixtime : time.getTime() }
}
 
var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result
 
  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)
 
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))




