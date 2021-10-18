// Javascript

// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 18
//
// Maneja las rutas de acceso
// --------------------------------------------------------------


const express = require("express")
const router = express.Router()
const controladorMedicion = require("../controladores/ControladorMedicion.js")
var cors = require('cors');

// metodos API REST

router.get("/", cors(), (req, res) => {
    res.send('Funciona!');
})

// http://localhost:5500/obtenerTodasMediciones direccion a obtener todas las mediciones de la tabla
router.get("/obtenerTodasMediciones", cors(), controladorMedicion.obtenerTodasMediciones);

/* Sintaxis Añadir Sensor desde la web
* {
   "direccion_sensor": "Direccion Sensor",
   "nombre": "nombreSensor",
   "dioxido_carbono": "dioxidoCarbono"
* }
   Efectura en formato JSON en metodo post
*/
router.post("/anyadirMedicion", cors(), controladorMedicion.anyadirMedicion);
module.exports = router