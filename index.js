const express = require('express')
const app = express()
const {settings} = require('./setting')
let port = process.argv[2] || 8080

console.log(settings)

app.get('/',(req, res) => {
    res.send('ciao')
})

app.listen(port)