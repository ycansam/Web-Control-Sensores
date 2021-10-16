const {
    json
} = require("body-parser");
const con = require('../conexion');

module.exports = class logicaMedicion {
    constructor() {}
    /**
     * Obtiene todas las mediciones de la base de datos
     */
    async obtenerTodasLasMediciones() {
        const sql = 'SELECT * FROM sensores';

        return new Promise((resolve, reject) => {
            con.query(sql, (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    resolve(results);
                } else {
                    reject("No hay resultado")
                }
            });
        })
    }
    /**
     *  Añade una medicion especifica a la base de datos
     * @param {*} medicion medicion a añadir a la base de datos
     */
    anyadirMedicion(medicion) {
        const sql = 'INSERT INTO sensores SET ?';
        const sensorObj = {
            id_sensor: medicion.idSensor,
            nombre: medicion.nombre,
            temperatura: medicion.temperatura,
            dioxido_carbono: medicion.dioxidoCarbono
        }
        return new Promise((resolve, reject) => {
            con.query(sql, sensorObj, err => {
                if (err) reject(err);
                resolve(true)
            })
        })
    }
}