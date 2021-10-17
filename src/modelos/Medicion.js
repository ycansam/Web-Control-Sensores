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
    }
}