//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var expense = new Schema({
    type: String,
    ammount: Number,
    message: String
});

module.exports = mongoose.model('expense', expense);