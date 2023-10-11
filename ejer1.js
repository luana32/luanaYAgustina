let cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JavaScript", 10000],
    ["React", 7000],
    ["Node.js", 15000],
  ];


let cursosMayuscula=["HTML5","CSS3","REACT"]
/*
console.log(cursosMayuscula);
function convertirMayuscula(array){
    let arreglo=[]
    for (let i=0;i<array.length;i++){
        arreglo[i]=array[i][0].toUpperCase();
    }
    return arreglo;
} */

function calcularMonto(catalogo,cursosAlumno){
    let monto=0
    for (let j=0;j<catalogo.length;j++){
        
        if(catalogo[j]==cursosAlumno[i][0].toUpperCase()){
            monto+cursosAlumno[i][1]
        
        }
    }
    return monto;
}
console.log(calcularMonto(cursos,cursosMayuscula))