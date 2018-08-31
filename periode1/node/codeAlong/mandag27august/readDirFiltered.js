const fs = require("fs");
const path = require("path");

/* 
var readDirFiltered = function(pathToDir,extension,cb){
  const ext = "." + extension;
  fs.readdir(pathToDir,(err,data)=>{
    if(err){
     return cb(err);
    }
    var files = data.filter(filename=>path.extname(filename) === ext);
    cb(null,files);
  });
} 
*/

// Laves med promise. Vores egen promise. Opg 1 i samme stil.
var readDirFiltered = function(pathToDir, extension) {
  new Promise((resolve, reject) => {
    const ext = "." + extension;
    fs.readdir(pathToDir, (err, data) => {
      if (err) {
        return err;
      }
      var files = data.filter(filename => path.extname(filename) === ext);
      resolve(files);
    });
  });
};

module.exports = readDirFiltered;
