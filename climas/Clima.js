/* Trabajo de Camila*/
//Funcion constructora
//const hoy = new Date().toLocaleDateString()
//date es una funcion constructora que nos da el dia de hoy .toLocaleDateString() nos devuelve un formato de fecha legible
//objeto clima hoy, temperatura, humedad, lluvia /true-false
const climar = function (fecha, dia, temperatura, humedad,lluvia) {
    this.fecha = new Date().toLocaleDateString();  
    this.dia = dia;
    this.temperatura = temperatura;
    this.humedad = humedad;
    this.lluvia = lluvia
  };
  
  module.exports = climar;
  