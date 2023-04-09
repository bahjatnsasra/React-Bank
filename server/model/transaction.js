const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/bankDB')
.then(()=> console.log('Connected to MongoDB'))
.catch((error)=> console.log('cant Connected to MongoDB',error));


const transactionSchema  = new Schema({
    amount  : Number,
    category : String,
    vendor  : String
})

const Transaction = mongoose.model("transaction", transactionSchema) 

module.exports = Transaction