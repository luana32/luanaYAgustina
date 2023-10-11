//Integracion ejercicio EXTRA:

//1) Existencia de numero
let numeros = [12,40,10,-20,-10,30,42]

function existenciaNum(numeros,num){
    
    for (let i=0;i<numeros.length;i++){
        if (numeros.indexOf(num)!== -1){
            return console.log(`El número ${num} si existe en el array`);
        }else{
            return console.log('El valor solicitado no existe.')
        }
    }
}

//Juego del trompito
let cadena=["toma 1","toma 2","pon 1","pon 2","todos ponen", "toma todo"]
function juegoTrompito(cadena,vueltas){
      if (vueltas < 2 || vueltas > 6) {
    return "El número de vueltas debe estar entre 2 y 6.";
  }

  // Generar un número aleatorio entre 0 y 5
  const resultado = Math.floor(Math.random() * 6);

  // Seleccionar un mensaje del array basado en el resultado
  const mensaje = cadena[resultado];

  return mensaje;
}
// Suma de pares e impares:
let arrayNum=[12,40,60,20,-32,-12,-64,-10,2,-5]
function sumatoria(arrayNum){
    let sumaImpar=0;
    let sumaPar=0;
    for(let i=0;i<arrayNum.length;i++){
        if ((arrayNum[i]%2)==0){
            sumaPar+=arrayNum[i];
        }else{
            sumaImpar+=arrayNum[i];
        }
    }
    return [sumaPar,sumaImpar];
}

existenciaNum(numeros,-10)
console.log(juegoTrompito(cadena,4));
let resultados= sumatoria(arrayNum)
console.log(`Suma Par: ${resultados[0]}
Suma Impar: ${resultados[1]}`)