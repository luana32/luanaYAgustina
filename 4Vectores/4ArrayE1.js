let productos=["Heladera", "Televisor","Horno","Microondas","Celular","Estufa"];
console.log(productos);
//Accion 1:
console.log("El elemento de la posicion 3 es: ",productos[3]);
//Acción 2:
console.log(productos);
let primero=productos.shift();
productos.push(primero);
console.log("Se Movió el primer elemento hacia el ultimo\n ",productos);
//Accion 3:
productos.push("Ventilador","Notebook");
console.log("Se agregaron dos elementos al final del array: ",productos);
//Accion 4:
console.log("La cantidad de elementos que contiene el array es: ",productos.length);
//Acción 5:
console.log("Buscando heladera...")
let existe= productos.indexOf("Heladera");
if (existe!== -1){
    console.log("Producto encontrado")
}else{
    console.log("El producto buscado no existe")
}
//Acción 6:
console.log("Productos en String separados por espacios: ")
let texto=productos.join(" ");
console.log(texto);
//Acción 7:
console.log("La cantidad de elementos que tiene el texto es de: ",texto.length);
//Acción 8:
function textoCambiado(tex,palabra){
    return tex.replace("Heladera",palabra);
}
console.log("Cambiando la palabra Heladera por Batidora: ",textoCambiado(texto,"Batidora"));
//Acción 9:
console.log("Texto como array: ",texto.split(" "))