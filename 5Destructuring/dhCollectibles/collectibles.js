const fs = require("fs");

function importar(marca){
    switch(marca){
        case "Star Wars":
            return JSON.parse(fs.readFileSync("./datos/figuras3.json","utf-8"));
            
        case "Hot Toys":
            return JSON.parse(fs.readFileSync("./datos/figuras1.json","utf-8"));
            
        case "Bandai":
            return JSON.parse(fs.readFileSync("./datos/figuras2.json","utf-8"));
            
    }
}
module.exports= {importar};