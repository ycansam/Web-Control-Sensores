const mysql = require('mysql');
// Conexion.js
'use strict';

module.exports = class Conexion {
    constructor(host, user, password, database) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }

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
        app.use(function (req, res, next) {
            req.con = connection
            next()
        })
        return connection;
    }
};