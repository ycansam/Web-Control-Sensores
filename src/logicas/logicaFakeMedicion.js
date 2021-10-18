// Javascript

// --------------------------------------------------------------
//
// Yeray Candel Sampedro
// 2021 - 10 - 18
//
// Logica Fake
// --------------------------------------------------------------


$(function obtenerTodasMediciones() {
    $.ajax({
        // hago una peticion Get a la api para obtener la lista de sensores
        type: "GET",
        url: "http://localhost:3050/obtenerTodasMediciones",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: "json",
        data: {},
        success: function (arrayMediciones) {
            // para cada sensor le creo un li para que aparezca en el html
            arrayMediciones.forEach(function (medicion) {
                mostrarMedicion(medicion);
            });
        },
        error: function () {
            console.log("error");
        },
        crossDomain: true
    })
})

function mostrarMedicion(medicion) {
    var html = '<li id="sensor-" style="display:flex;">' +
        '            <p id="id-sensor-" style="margin-right:auto; width: 25%;">' + medicion.id_sensor + '</p>' +
        '            <p class="nombre-sensor" style="margin-right:auto;width: 25%;">' + medicion.nombre + '</p>' +
        '            <p class="dioxido" style="margin-right:auto;width: 25%;">' + medicion.dioxido_carbono + '</p>' +
        '            <p class="fecha" style="margin-right:auto;width: 25%;">' + medicion.fecha + '</p>' +
        '        </li>';
    $('#lista-sensores').append(html);
}