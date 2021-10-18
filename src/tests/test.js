/**
 * Yeray Candel Sampedro
 * 18 - 10 - 2020
 */

const {
    expect
} = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
/**
 * Hace un test de pruebas de obtener todas las mediciones
 */
describe('Obtiene todas las mediciones', () => {
    it('Array de mediciones', (done) => {
        chai.request('http://localhost:3050')
            .get('/obtenerTodasMediciones')
            .end((err, res) => {
                expect(res.body.length).to.above(0)
                done();
            })
    })
})
/**
 * Hace un test de pruebas de añadir una medicion
 */
describe('Añade 1 medicion', () => {
    it('Deberia añadir una medicion a la base de datos', (done) => {
        chai.request('http://localhost:3050')
            .post('/anyadirMedicion')
            .send({
                direccion_sensor: 'AX:AD:AS:AS:AS',
                nombre: "Hola",
                dioxido_carbono: 20
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                done();
            })
    })
})