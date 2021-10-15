const express = require("express")
const router = express.Router()
const controladorMedicion = require("../controladores/ControladorMedicion.js")
var cors = require('cors');

router.get("/obtenerSensores", cors(), controladorMedicion.obtenerTodasMediciones)
router.post("/anyadirSensor",cors(), controladorMedicion.anyadirMedicion)
module.exports = router