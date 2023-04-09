const express = require('express')
const router = express.Router()
const Transaction = require('../model/transaction')



router.post('/add-transaction', function (req,res) {
    let newtransaction = new Transaction({
        amount: req.body.amount,
        category: req.body.category,
        vendor: req.body.vendor,
    })
    res.send(newtransaction)
    newtransaction.save()
})

router.get('/transactions' , function (req,res) {
    Transaction.find({},{_id:0})
    .then(allTransactions => {
        res.send(allTransactions)
    })
})

router.delete('/transaction',function (req,res) {
    let id = req.body.transactionId
    Transaction.findOneAndDelete({_id:id}).then(transaction => {
        if(!transaction){
            res.status(404).send(`transaction not found`)
            res.end()
        }else{
            res.send(transaction)
        }
    })
})


router.get('/category/transactions',function (req,res) {
    Transaction.aggregate([
        {$group : {_id:"$category", amount:{$sum:"$amount"}}}
    ])
    .then(transactionsByCategory => {
        res.send(transactionsByCategory)
    })
})


module.exports = router