var Medicion = require('../modelos/Medicion.js');
module.exports = {
    obtenerTodasMediciones: function (req, res) {
        const connection = req.con;
        // obtiene todos los sensores
        const sql = 'SELECT * FROM sensores';
        connection.query(sql, (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                res.json(results);
            } else {
                res.send('No hay resultados');
            }
        })
    },

    anyadirMedicion: function (req, res) {
        medicion.create(req.con, req.body, function (err) {
            res.redirect("/biodata")
        })
    }
}