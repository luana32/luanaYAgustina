// Grupo: 3 Participantes: Ignacio Fonzo, Carabajal Brian, Ivan Arjona, Juan Jose Rodriguez, Ricardo Coronel, Luana Yannina Capilla
function alquiler(tipo,dias,bebe){
    monto=0;
    switch(tipo.toLowerCase()){
        case "compacto":
        monto=monto+14000;
        break;
        case "mediano":
        monto=monto+17000;
        break;
        case "camioneta":
        monto=monto+28000;
        break;
        default:
            console.log("El tipo de dato no es correcto. Debe ingresar Compacto, Mediano o Camioneta");
    }
    if (bebe="si"){
        monto=monto+(1200*dias);
    }else{
        console.log("No se le asignará silla para bebe");
    }
    return console.log("Estimado cliente: en base al tipo de vehículo ",tipo," alquilado,\nconsiderando los "+dias +" días utilizados, el monto total a pagar es de $",monto) 
}
alquiler("mediano",3,"si")