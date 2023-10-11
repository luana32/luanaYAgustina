const fs=require("fs");
function traerBicicleta(){
    let contenidoBicicletas=fs.readFileSync("./bicicletas.json","utf-8");
    return JSON.parse(contenidoBicicletas)
}
module.exports={traerBicicleta}