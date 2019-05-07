const express = require('express')
const app = express()
const {settings} = require('./settings.js')
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)

app.listen(port)
