//utilizamos la funcionadidad de ./climas index
require('colors');

const moduloClimar = require("./climas");
console.clear();
const argv = require("process").argv;

const comando = argv[2];

switch (comando) {
  case "listar":
   moduloClimar.listar()
    break;
}


