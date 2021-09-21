# **API REST NODE JS** Mostrar datos de sensores
***
###### La pagina web recibira los datos enviados por la aplicacion movil, que estaran almacenados en una base de datos.
## Instalacion
Abrir una consola de comandos en la carpeta src y escribir: 
`npm i express nodemon body-parser mysql`

Crear un archivo ***app.js*** y escribir: 
```javascript
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();
```
##### Conexion a la base de datos
#
```javascript
app.use(bodyParser.json());
// Conexion a la base de datos
const connection = mysql.createConnection({
    host: 'localhost', // sutituir
    user: 'tu nombre de usuario', 
    password: 'tu contraseña',
    database: 'tu tabla' 
});
// ruta de acceso
app.get('/', (req, res) => {
        res.send('tu mensaje de prueba');
    })
    // Check Connection
connection.connect(error => {
    if (error) throw error;
    console.log("Database server running!");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```
Servidor Instalado.


