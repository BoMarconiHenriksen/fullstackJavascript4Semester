var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {
   
    fs.readdir(dir, function (err, list) { // fs.readdir() funktion kalder callback funktionen når den er færdig og giver den en list.
        if (err) // hvis fejl printes fejlen til consollen.
            return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr // Det som matcher variablen .filterStr returnes til variablen list
        })

        callback(null, list) // callbacken bliver kaldt og der passes null, og list. Det er callbacken fra getFiles funktionen.
    })
   
}