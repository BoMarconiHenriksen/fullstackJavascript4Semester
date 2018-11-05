var mongoose = require('mongoose');

// I en express i app.js
// laver vores connection op mod databasen.
require('./dbSetup')

var UserSchema = new mongoose.Schema({
    userName: {
        String,
        //required: true
    },
    email: {
        String,
        //unique: true
    },
    modified: {
        type: Date,
        default: Date.now
    }
});




// middleware. Sæt datoen når der saves ved editing.
/* UserSchema.pre('save', function (next) {
    this.modified = new Date();
    next();
}); */

// Behøver ikke at eksporter.
mongoose.model('User', UserSchema);
