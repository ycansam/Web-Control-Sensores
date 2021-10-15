// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 27
//
// --------------------------------------------------------------

const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
// modelos
const Medicion = require('./modelos/Medicion.js').default;
const Conexion = require('./modelos/Conexion.js');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3050/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Mysql conexion
var conexion = new Conexion('localhost', 'root', '', 'control-sensores');
const connection = conexion.conectar(app);

// connecting route to database

const medicionRouter = require("./rutas/RouterMedicion.js")
app.use("/", medicionRouter)
// ruta de acceso
// app.get('/', (req, res) => {
//     res.send('Funciona!');
// });
// Check Connection
// escuchando al puerto
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// metodos API

// obtiene todos los sensores
app.get('/obtenerSensores', cors(), (req, res) => {
    const sql = 'SELECT * FROM sensores';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    })
})

// añade los sensores
app.post('/anyadirSensor', cors(), (req, res) => {
    const sql = 'INSERT INTO sensores SET ?';
    console.log(req.body);
    const sensorObj = {
        id_sensor: req.body.id_sensor,
        nombre: req.body.nombre,
        temperatura: req.body.temperatura,
        dioxido_carbono: req.body.dioxido_carbono

    }
    const medicion = new Medicion(
        req.body.id_sensor,
        req.body.nombre,
        req.body.temperatura,
        req.body.dioxido_carbono
    )
    connection.query(sql, sensorObj, err => {
        if (err) throw err;
        res.send('Sensor Creado');
    })

});
// tip
/*Sintaxis Añadir Sensor desde la web
    {
        "idSensor": "id",
        "nombre": "nombreSensor",
        "temperatura": "temperatura",
        "dioxidoCarbono": "dioxidoCarbono"
    }
*/

// NO UTILIZAR

// actualiza el sensor
// app.put('/actualizarSensor/:id', (req, res) => {
//     res.send('Actualizar Sensor');
// });

// // eliminar sensor
// app.delete('/eliminarSensor/:id', (req, res) => {
//     res.send('Eliminar Sensor');
// })