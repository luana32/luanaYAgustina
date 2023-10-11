let num1=20;
let num2=21;
let operacion="RESTAR"
switch(operacion.toLowerCase()){
    case "sumar":
        console.log("El resultado de sumar ",num1 ,"+", num2, "es: ", num1+num2);
        break;
    case "restar":
        console.log("El resultado de restar ",num1 ,"-", num2, "es: ", num1-num2);
        break;
    case "multiplicar":
        console.log("El resultado de multiplicar ",num1 ,"*", num2, "es: ", num1*num2);
        break;
    case "dividir":
        console.log("El resultado de dividir ",num1 ,"/", num2, "es: ", num1/num2);
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar, restar, multiplicar y dividir");
    }