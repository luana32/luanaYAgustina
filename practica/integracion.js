//Integracion- MICRODESAFIO 1:
let cursos=[
    ["html5",      4000],
    ["css",       5000],
    ["javascript",10000],
    ["react",     7000],
    ["nodejs",    1500]
]

let cursosAlumno=["NODEJS","HTML5"]

function montoAlumno(curso,cursoAlum){
    let costo=0;
    for (let i=0;i<cursoAlum.length;i++){
        for(let j=0;j<curso.length;j++){
            if (cursoAlum[i]==curso[j][0].toUpperCase()){
                costo+=curso[j][1];
                console.log(curso[j][0])
            }
        }
    }
    return costo;
}

function mostrar(curso, cursoAlum, nombre, apellido, funcion) {
    console.log(`Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:`);
    cursoAlum.forEach((cursoAlum, indice) => {
      console.log(`${indice + 1}.- ${cursoAlum}`);
    });
    console.log(`El costo total es: ${funcion}
Bienvenido a la gran aventura Digital House`);
  }
  
  mostrar(cursos, cursosAlumno, "Luana", "Capilla", montoAlumno(cursos, cursosAlumno));
