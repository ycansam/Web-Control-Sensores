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