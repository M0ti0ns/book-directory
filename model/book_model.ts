const mongoose = require('mongoose');
const db = require('../config/db');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        default:"----"
    },
    isbn:{
      type:Number,
    },
    author:{
        type:String,
        default:"----"
    },
    pagination:{
        type:Number,
    },
    ratings:{
        type:String,
    }
});

const bookmodel = db.model('books',bookSchema);

module.exports = bookmodel;