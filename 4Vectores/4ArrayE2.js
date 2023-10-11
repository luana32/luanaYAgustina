let peliculas=["Turno de dia","30 noches con mi ex","Bestia","El monte","Top gun maverick","Elvis","Thor:amor y trueno"];
function cambiarMinusculas(peli){
    return peli.toUpperCase()
}
console.log(cambiarMinusculas("Thor: amor y trueno"));
let texto="Counter-Strike NOP Vértigo Nick Avatar";
let newText=texto.split(" ");
console.log(newText);
let quitar=newText.shift();
console.log("Elemento Counter-Strike eliminado: ",newText);
const nuevaConcatenacion=peliculas.concat(newText);
console.log(nuevaConcatenacion);