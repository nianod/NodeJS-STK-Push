const express = require('express')
const stkPush = require('./stkPush')
const app = express()
const PORT = 3000

app.use(express.json())

app.post('/stk-push', (req, res) => {
    const amount = req.body.amount
    const phoneNumber = req.body.phoneNumber

    stkPush(amount, phoneNumber)
    .then((response) => {
        res.send('STK push Successfully')
    }) .catch((error) => {
        console.error('Error initiating payment', error)
        res.status(500).send('Error occurred here brother')
    })
})

app.listen(PORT, ()=> {
    console.log('Server running on port ', PORT)
})