var mongoose = require('mongoose');
require('./User');
var User = mongoose.model('User');

// slet alt
User.deleteMany({}, ()=> console.log('All documents deleted'));

// new. User. Stort U indiker at det er en konstruktør funktion
// Brug derfor new for ikke at ødelægge this.
var kurt = new User ({userName: 'Kurt Wonnegut', email: 'kw@a.dk'});
var hanne = new User ({userName: 'hanne Wonnegut', email: 'h@a.dk'});
var mini = new User ({userName: 'mini Wonnegut', email: 'm@a.dk'});
var another = new User ({userName: 'anoter onnegut', email: 'a@a.dk'});

// 2. eksempel
// returner 2 promises. En for hver bruger. Der er en insert all.
// Vi bruger denne her for at øve promises.
var newUsersP = [kurt.save(), hanne.save(), mini.save(), another.save()];

// 2. eksempel
Promise.all(newUsersP)
    .then(users => console.log('Size: ' + users.length) )
    .catch(err => console.log(err));

/* kurt.save((err, data) => {
    if(err) {
        return console.log(err);
    }
    console.log(data.userName, data._id);
})  */

