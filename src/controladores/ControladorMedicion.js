// Javascript

// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 18
//
// Controla las mediciones entre la logica verdadera y la logica fake
// --------------------------------------------------------------


var Medicion = require('../modelos/Medicion.js');
var logicaMedicion = require('../logicas/logicaMedicion');

const logicaMediciones = new logicaMedicion();

module.exports = {
    /**
     * Obtiene todas las mediciones de la base de datos
     * @param {*} req 
     * @param {*} res 
     */
    obtenerTodasMediciones: function (req, res) {
        const mediciones = logicaMediciones.obtenerTodasLasMediciones();
        // obtenidas array mediciones
        mediciones.then((arrayMediciones) => {
            console.log(arrayMediciones);
            res.json(arrayMediciones);
        }, function (reason) {
            console.log(reason);
        })
    },
    /**
     * Añade una medicion especifica a la base de datos
     * @param {*} req 
     * @param {*} res 
     */
    anyadirMedicion: function (req, res) {
        // añade los sensores
        const medicion = new Medicion(
            req.body.id_sensor,
            req.body.nombre,
            req.body.dioxido_carbono
        )
        const added = logicaMediciones.anyadirMedicion(medicion);
        if (added) {
            res.send("Sensor Creado")
        } else {
            res.send(added);
        }
    }
}