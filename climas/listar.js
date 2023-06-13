const {leerJSON} = require('../data');
const clima_db = leerJSON()

const listar = function (datoclima = clima_db) {
    console.log("\n*************** APP CLIMA *****************\n".cyan);
    datoclima.forEach(({dia, temperatura, humedad, lluvia},i) => {
        const fechaActual = new Date().toLocaleDateString();
        console.log(
            `El pronóstico para ${dia} ${fechaActual} es de ${temperatura}C° y ${humedad}% de humedad.
Con una probabilidad de lluvia "${lluvia}"`
        .yellow);
    });
    console.log("\n***************************************************\n".cyan);

    return null
}
module.exports = listar
