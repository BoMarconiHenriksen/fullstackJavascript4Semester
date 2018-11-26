import mongoose from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test123@ds115854.mlab.com:15854/friends');

const friendSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    gender: {type: String},
    age: {type: Number},
    language: {type: String},
    email: {type: String},
    contacts: {type: Array}
});

const Friends = mongoose.model('friends', friendSchema);

export { Friends };
