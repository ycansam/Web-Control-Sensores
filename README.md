# **API REST NODE JS** Mostrar datos de sensores
***
##### La pagina web recibira los datos enviados por la aplicacion movil, que estaran almacenados en una base de datos.
## Instalacion
Abrir una consola de comandos en la carpeta src y escribir: 
`npm i express nodemon body-parser mysql cors`
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
```
### Ejecutar el servidor:
1. Abrir la conexion MYSQL + Apache.
 - `npm run dev`
### Iniciar la web
1. En un navegador web abrir una nueva pestaña
 - Si es localhost; introducit en la urL: `http://localhost:3050` + `/funcionPublica`

## Funciones publicas
##### Obtiene datos de todos los sensores ***GET***
```javascript
app.get('/obtenerSensores', cors(), (req, res) => {
    // code
})
```
##### Añade datos del sensor ***POST***
```javascript
app.post('/anyadirSensor', (req, res) => {
    // code
});
```


