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
    /**
     * constructor de la clase
     * @param {*} direccionSensor  Direccion MAC del sensor
     * @param {*} nombre  nombre del dispositivo
     * @param {*} dioxidoCarbono  Valor de dioxido de carbono
     */    
    constructor(direccionSensor, nombre, dioxidoCarbono) {
        this.direccion_sensor = direccionSensor;
        this.nombre = nombre;
        this.dioxidoCarbono = dioxidoCarbono;
        this.fecha = null;
    }
}