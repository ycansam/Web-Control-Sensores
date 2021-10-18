// Javascript

// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 18
//
// Logica Verdadera medicion
// --------------------------------------------------------------

const {
    json
} = require("body-parser");
const con = require('../conexion');

module.exports = class logicaMedicion {
    constructor() {}
    /**
     * Obtiene todas las mediciones de la base de datos
     * @return results Devuelve el array de mediciones obtenido de la base de datos
     */
    async obtenerTodasLasMediciones() {
        const sql = 'SELECT * FROM mediciones';

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
     * @return Bool | Error devuelve true si se ha añadido y si no el error
     */
    anyadirMedicion(medicion) {
        const sql = 'INSERT INTO mediciones SET ?';
        const sensorObj = {
            direccion_sensor: medicion.direccion_sensor,
            nombre: medicion.nombre,
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