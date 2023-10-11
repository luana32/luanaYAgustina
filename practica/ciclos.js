//CICLOS : Clase 7 MICREODESAFIO 2:
let operaciones= [300,-300,6000,-100];
function callBack(op){
    let depositos=0;
    let retiros=0
    let total=0
    for (let i=0; i<op.length;i++){
        if (op[i]>=0){
            depositos+=op[i];
        }else{
            retiros+=op[i];
        }
        total+=op[i];
    }
    return [depositos,retiros,total];
}

function mostrar(nombre,apellido,operaciones,funcion){
    let movimientos=funcion(operaciones)
    return console.log(`Estimado ${nombre} ${apellido}:
    El monto total de los depositos es de: ${movimientos[0]}
    El monto total de los retiros es de: ${movimientos[1]}
    Por lo tanto, su saldo actual en l cuenta es de: ${movimientos[2]}`);

}
mostrar("Luana","Capilla",operaciones,callBack)