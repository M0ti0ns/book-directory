import mongoose from 'mongoose'

var url ='mongodb://localhost:3000/booksDB';

const connection = mongoose.createConnection(url);

module.exports = connection;