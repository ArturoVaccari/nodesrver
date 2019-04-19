const express = require('express')
let PORT  = process.argv[3] || 3000
const app = express()

console.log()
if (process.argv[2] === 'v'){
    console.log('my version is 0.0.1')
}

app.get('/', (req, res) => {
    res.send('hello worldo')
})

app.listen(PORT)
console.log(`Server running at http://127.0.0.1:${PORT}`);