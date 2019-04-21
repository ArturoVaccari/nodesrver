const express = require('express')
const app = express()
const fs = require('fs')
let port = process.argv[2] || 8080

app.get('/menu', function(req, res){
    const filename = 'menu.json'
    fs.readFile(filename, function(e, data) {
        // 500 internal error server
        if (e) return res.sendStatus(500)
        try {
            menu = JSON.parse(data)
        } catch (e) {
            res.sendStatus(500)
        }
        res.json(menu)
    })
})

app.listen(port)