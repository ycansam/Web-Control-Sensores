const mysql = require('mysql');
/**
 * Crea la conexion a la base de datos
 */
const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'control-sensores'
})

module.exports = conexion