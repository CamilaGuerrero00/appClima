//leer y escribir json
const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

const leerJSON = () => JSON.parse(readFileSync(path.join(__dirname, 'clima.json') ,'utf-8'));

const escribirJSON = (clima) =>   writeFileSync(path.join(__dirname,'clima.json'),JSON.stringify(clima,null,3),'utf-8');


module.exports = {
    leerJSON,
    escribirJSON
}