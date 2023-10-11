const peliculas=require('./peliculas');
for (let i=0;i<peliculas.length;i++){
    console.log(peliculas[i])
}
let fs=require('fs');
var archivo= fs.readFileSync('/mensaje.txt', "utf-8")
console.log(archivo)