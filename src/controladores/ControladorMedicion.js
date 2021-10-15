var Medicion = require('../modelos/Medicion.js');

module.exports = {
    /**
     * Obtiene todas las mediciones de la base de datos
     * @param {*} req 
     * @param {*} res 
     */
    obtenerTodasMediciones: function (req, res) {
        const connection = req.con;
        Medicion.obtenerTodasLasMediciones(connection, res);
    },

    /**
     * Añade una medicion especifica a la base de datos
     * @param {*} req 
     * @param {*} res 
    */
    anyadirMedicion: function (req, res) {
        const connection = req.con;
        // añade los sensores
        const medicion = new Medicion(
            req.body.id_sensor,
            req.body.nombre,
            req.body.temperatura,
            req.body.dioxido_carbono
        )
        Medicion.anyadirMedicion(medicion, connection, res);
    }
}