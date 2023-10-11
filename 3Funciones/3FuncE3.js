// Grupo: 3 Participantes: Ignacio Fonzo, Carabajal Brian, Ivan Arjona, Juan Jose Rodriguez, Ricardo Coronel, Luana Yannina Capilla
function mayuscula(texto){
    return console.log(texto.toUpperCase());
}
function tipo(a){
    return console.log(typeof(a));
}
function edad(años){
    return console.log(años*7);
}
function valorUnaHora(salarioMes,cantDias,cantHoras){
    salarioDiario=salarioMes/cantDias;
    return console.log("El valor de una hora de trabajo es de: ",salarioDiario/cantHoras);
}
mayuscula("hola mundo");
tipo(true);
edad(2);
valorUnaHora(50000,5,3);