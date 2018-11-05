var mongoose = require('mongoose');
require('./User');
var User = mongoose.model('User');

// find one user
/* User.findOne( { "userName": "Kurt Wonnegut" } ).exec()
    .then(u => console.log(u_id))
    .catch(err => console.log(err)); */

    // Projection = vil kun ha userName og email.
    /* User.find( { "userName": "Kurt Wonnegut" }, 'userName email -_id' ).exec() // -_id ikke id med
    .then(u => console.log(u))
    .catch(err => console.log(err)); */

    // find returner et array.
    User.find( { userName: /Wonnegut/i } ).exec()
    .then(users => console.log(users.length))

    // Update skal have sin egen fil normalt. {new:true} for at få den nye user tilbage
    User.findOneAndUpdate( { userName: 'mini Wonnegut' }, {$set: {email: 'dfdf@df.dk'} }, {new:true} ).exec()
    .then(newUser => console.log(newUser))
    .catch(err => console.log(err))


