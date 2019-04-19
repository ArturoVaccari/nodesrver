const express = require('express')
// let PORT  = process.argv[3] || 3000
let PORT = process.argv[2] || 3000
const app = express()

// app.use(express.static('nome cartella file statici'))
app.use(express.static(__dirname + '/public'))

//app.get('/', (req, res) => {
//    res.send('hello worldo')
//})

app.listen(PORT)
console.log(`Server running at http://127.0.0.1:${PORT}`);