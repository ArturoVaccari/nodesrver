const express = require('express');
const router = express.Router();
const characters = require('../data/characters')
// QUery
// chiedi http://localhost:7070/personaggi?colore=giallo&sesso=m
router.get('/', (req, res, next) => {
    const query = req.query
    let personaggi = characters.characters
    if ('lastname' in query) {
        personaggi = personaggi.filter((personaggio) => {
        return personaggio.lastname === query.lastname
        })
    }
    if ('firstname' in query) {
        personaggi = personaggi.filter((personaggio) => {
        return personaggio.firstname === query.firstname
        })
    }
    res.send(personaggi)
    next();
    }, (req, res, next) => {
        console.log('FIRE')
    }
)

// Params
//http://localhost:7070/personaggi/9
router.get('/:id/', (req, res) => {
  const id = Number(req.params.id)
  res.jason(characters.characters.filter(personaggio => personaggio.id === id))
})

router.get('/form', (req, res) => {
    const body = req.body
    const {nome, cognome, occupazione} = req.body
    console.log(nome, cognome, occupazione)
    res.send(body)
  })

module.exports = router