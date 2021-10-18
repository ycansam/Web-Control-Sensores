// Javascript

// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 18
//
// Clase Medicion
// --------------------------------------------------------------



const {
    json
} = require("body-parser");
const con = require('../conexion');

module.exports = class Medicion {
    // constructor de la clase
    constructor(idSensor, nombre, dioxidoCarbono) {
        this.idSensor = idSensor;
        this.nombre = nombre;
        this.dioxidoCarbono = dioxidoCarbono;
        this.fecha = null;
    }
}