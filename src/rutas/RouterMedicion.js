const express = require("express")
const router = express.Router()
const controladorMedicion = require("../controladores/ControladorMedicion.js")
var cors = require('cors');

// metodos API REST

router.get("/", cors(), (req, res) => {
    res.send('Funciona!');
})

// direccion a obtener todas las mediciones de la tabla
router.get("/obtenerTodasMediciones", cors(), controladorMedicion.obtenerTodasMediciones);

/* Sintaxis Añadir Sensor desde la web
* {
   "id_sensor": "idSensor",
   "nombre": "nombreSensor",
   "temperatura": "temperatura",
   "dioxido_carbono": "dioxidoCarbono"
* }
   Efectura en formato JSON en metodo post
*/
router.post("/anyadirMedicion", cors(), controladorMedicion.anyadirMedicion);
module.exports = router