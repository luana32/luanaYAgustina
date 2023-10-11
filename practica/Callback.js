//Micro desafío 2: FUNCIONES
function callBack(tipo,jamon,queso,salsa,mayo,most,tomate,lechuga,cebolla){
    precio=0
    switch (tipo.toLowerCase()){
        case "carne a la parrilla":
            precio=precio+1800;
        break;
        case "pollo":
            precio=precio+1500;
        case "vegetariana":
            precio=precio+1200;
        break;
        default:
            console.log("Usted no ha seleccionado un tipo de carne correctamente.\nOpciones:Carne a la parrilla\nPollo\nVegetariana");
            return;    
    }
    if (jamon===true){
        precio=precio+30
    }
    if (queso){
        precio=precio+25
    }
    if (salsa===true){
        precio=precio+5
    }
    if (mayo===true){
        precio=precio+5
    }
    if (most===true){
        precio=precio+5
    }
    if (tomate===true){
        precio=precio+15
    }
    if (lechuga===true){
        precio=precio+10
    }
    if (cebolla===true){
        precio=precio+10
    }
    return precio;
}
let p=callBack("pollo",true,false,false,true,true,false,ñfalse,true);
function mensaje(nombre,apellido,callBack){
    return console.log("Estimando "+nombre+" "+apellido+", el monto total es de: "+ p);
}
mensaje("Luana","Capilla",p);