const fs = require("fs");

function traerBicicleta(){
    let contenidoBicicletas = fs.readFileSync("bicicleta.json", "utf-8");
    return JSON.parse(contenidoBicicletas);
}
module.exports = {traerBicicleta};