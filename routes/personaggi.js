const express = require('express');
const router = express.Router();
const characters = require('../data/characters')
// QUery
// chiedi http://localhost:7070/personaggi?colore=giallo&sesso=m
router.get('/', (req, res, next) => {
    res.send(characters) 
});

// Params
//http://localhost:7070/personaggi/9

router.get('/:id', (req, res) => {
  // convert string in numebr
  const id = Number(req.params.id)
  res.json(characters.characters.filter(item => item.id === id))
})

// Metodo POST
router.post('/form', (req, res) => {
  const body = req.body
  const {
    nome,
    cognome,
    occupazione,
    tel
  } = req.body

  const status = {}
  console.log(nome, cognome, occupazione, tel)
  if (nome) {
    status.code = 'ok'
    status.message = `Benvenuto ${nome}`
  } else {
    status.code = 'error'
    status.message = 'nome non valido'
    status.campo = 'nome'
  }
  res.send(status)
})


module.exports = router