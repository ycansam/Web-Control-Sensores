module.exports = class Medicion {

    // constructor de la clase
    constructor(idSensor, nombre, temperatura, dioxidoCarbono) {
        this.idSensor = idSensor;
        this.nombre = nombre;
        this.temperatura = temperatura;
        this.dioxidoCarbono = dioxidoCarbono;
    }
    /**
     * Obtiene todas las mediciones de la base de datos
     * @param {*} connection conexion a la base de datos
     * @param {*} res
     */
    static obtenerTodasLasMediciones(connection, res) {

        const sql = 'SELECT * FROM sensores';
        connection.query(sql, (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                res.json(results);
            } else {
                res.send('No hay resultados');
            }
        })
    }
    /**
     *  Añade una medicion especifica a la base de datos
     * @param {*} medicion medicion a añadir a la base de datos
     * @param {*} connection conexion a la base de datos
     * @param {*} res  
     */
    static anyadirMedicion(medicion, connection, res) {
        const sql = 'INSERT INTO sensores SET ?';
        const sensorObj = {
            id_sensor: medicion.idSensor,
            nombre: medicion.nombre,
            temperatura: medicion.temperatura,
            dioxido_carbono: medicion.dioxidoCarbono
        }
        connection.query(sql, sensorObj, err => {
            if (err) throw err;
            res.send('Sensor Creado');
        })
    }
}