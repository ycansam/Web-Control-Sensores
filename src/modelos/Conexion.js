const mysql = require('mysql');
// Conexion.js
'use strict';

module.exports = class Conexion {
    //contructor de la conexion
    // ejemplo de uso -> var conexion = new Conexion('localhost', 'root', '', 'control-sensores');
    constructor(host, user, password, database) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }
    /**
     * Permite la conexion a la base de datos
     * @param {*} app  aplicacion a conectar 
     * @returns connection devuelve la conexion
     */
    conectar(app) {

        const connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
        connection.connect(error => {
            if (error) throw error;
            console.log("Database server running!");
        })
        // usa la conexion  para la aplicacion recibida
        app.use(function (req, res, next) {
            req.con = connection
            next()
        })
        const PORT = process.env.PORT || 3050;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

        return connection;
    }
};