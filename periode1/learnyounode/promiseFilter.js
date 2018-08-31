const fs = require('fs');
const path = require('path');

// Skal genbruges igen og igen.
var readDirFiltered = function(pathToDir, ext, cb) {
    fs.readdir(pathToDir, (err, data) => {
        if(err) {
           return cb(err);
        }
        var files = data.filter((fileName) => {
            if(path.extname(fileName) === ext) {
                cb(null, files) // null fordi der ikke er error.
            }
        })
    });
}

module.exports = readDirFiltered;