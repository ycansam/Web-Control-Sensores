const mysql = require('mysql');

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'control-sensores'
})

module.exports = conexion