const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());
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
    })
    // Check Connection
connection.connect(error => {
        if (error) throw error;
        console.log("Database server running!");
    })
    // escuchando al puerto
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// metodos API

// obtiene todos los sensores
app.get('/obtenerSensores', (req, res) => {
    const sql = 'SELECT * FROM sensores';
    connection.query(sql, (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                res.json(results);
            } else {
                res.send('No hay resultados');
            }
        })
        // res.send('Lista de todos los Sensores')
})

// añade los sensores
app.post('/añadirSensor', (req, res) => {
    res.send('Añadir Sensor');
})

// actualiza el sensor
app.put('/actualizarSensor/:id', (req, res) => {
    res.send('Actualizar Sensor');
});

// eliminar sensor
app.delete('/eliminarSensor/:id', (req, res) => {
    res.send('Eliminar Sensor');
})