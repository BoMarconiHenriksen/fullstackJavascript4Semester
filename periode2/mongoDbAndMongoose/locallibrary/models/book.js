var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author', // reference to a single author model object and is required.
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre' // reference to an array of genre model objects.
    }]
});

// Virtual for book's URL
BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
    });

//Export model
module.exports = mongoose.model('Book', BookSchema);