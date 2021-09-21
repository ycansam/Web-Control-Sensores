const express = require('express');
const mysql = require('mysql');
var cors = require('cors');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
        origin: 'http://localhost:3050/',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    // Mysql conexion
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'control-sensores'
});
// ruta de acceso
app.get('/', (req, res) => {
    res.send('viva españa');
});
// Check Connection
connection.connect(error => {
        if (error) throw error;
        console.log("Database server running!");
    })
    // escuchando al puerto
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// metodos API

// obtiene todos los sensores
app.get('/obtenerSensores', cors(), (req, res) => {
    const sql = 'SELECT * FROM sensores';
    // res.send('Lista de todos los Sensores')
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
app.post('/anyadirSensor', (req, res) => {
    const sql = 'INSERT INTO sensores SET ?';
    const sensorObj = {
        id_sensor: req.body.id_sensor,
        nombre: req.body.nombre,
        temperatura: req.body.temperatura,
        dioxido_carbono: req.body.dioxido_carbono
    }
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

// actualiza el sensor
// app.put('/actualizarSensor/:id', (req, res) => {
//     res.send('Actualizar Sensor');
// });

// // eliminar sensor
// app.delete('/eliminarSensor/:id', (req, res) => {
//     res.send('Eliminar Sensor');
// })