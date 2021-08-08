var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController.js")

//Creación

router.get("/crear", peliculasController.crear)

module.exports = router;
