const {
    json
} = require("body-parser");
const con = require('../conexion');

module.exports = class Medicion {
    // constructor de la clase
    constructor(idSensor, nombre, temperatura, dioxidoCarbono) {
        this.idSensor = idSensor;
        this.nombre = nombre;
        this.temperatura = temperatura;
        this.dioxidoCarbono = dioxidoCarbono;
    }
}