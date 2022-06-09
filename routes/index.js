var express = require('express');
var router = express.Router();
let modelLista= require('../models').Lista;

/* GET home page. */
router.get('/', async function(req, res, next) {
  const listas = await modelLista.findAll();
  res.render('index', {listaTareas: listas});
});

module.exports = router;
