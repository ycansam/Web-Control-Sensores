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

// usos
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// connecting route to database
const medicionRouter = require("./rutas/RouterMedicion.js")
app.use("/", medicionRouter)