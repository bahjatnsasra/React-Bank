const express = require('express')
const bankApi = require('./routes/bankApi')

const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/',bankApi)



const port = 5000  
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})