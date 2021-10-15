module.exports = class Medicion {
    constructor(idSensor, nombre, temperatura, dioxidoCarbono) {
        this.idSensor = idSensor;
        this.nombre = nombre;
        this.temperatura = temperatura;
        this.dioxidoCarbono = dioxidoCarbono;
    }
}