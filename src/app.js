// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 27
//
// --------------------------------------------------------------

// imports
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

// modelos
const Conexion = require('./modelos/Conexion.js');

// usos
app.use(cors());
app.use(bodyParser.json());

// Mysql conexion
var conexion = new Conexion('localhost', 'root', '', 'control-sensores');
// hace conexion a la base de datos a un puerto elegido
const connection = conexion.conectar(app, 3050);

// connecting route to database
const medicionRouter = require("./rutas/RouterMedicion.js")
app.use("/", medicionRouter)
