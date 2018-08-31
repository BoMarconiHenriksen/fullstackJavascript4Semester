const readDirFiltered = require('./readDirFiltered');
var pathToFile = process.argv[2];
var ext = process.argv[3];

//  Ved callback uden promise og async
/*
 readDirFiltered(pathToFile, ext, function(err, data) {
    if(err) {
        return console.log('UPPS' + err);
    }
    console.log(data);
})  
*/


// Kode til promise 
readDirFiltered(pathToFile, ext) {
    pathToFile.then(data => console.log(data))
    //readDirFiltered(pathToFile, ext) // Flere .then så behøves kun en catch blok. Fanger alle errors
.catch(err => console.log('UPS' + err)) 
};



