//INTEGRACION: MICRODDESAFIO 2:
let graduadosHTML5= "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3= "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT= "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS= "45 56 73 34 65 72 70 32";

let gHTML5 =graduadosHTML5.split(' ');
let gCSS3 =graduadosCSS3.split(' ');
let gJAVA =graduadosJAVASCRIPT.split(' ');
let gNODE =graduadosNODEJS.split(' ')

function calcularYMostrar(gCSS3,gHTML5,gJAVA,gNODE,num){
    let suma=0;
    let promedio=0;
    let curso="";
    if (num==1){
        curso="HTML5"
        for (let i=0;i<gHTML5.length;i++){
            suma+=parseInt(gHTML5[i])
        }
        promedio=suma/gHTML5.length
    }
    if (num==2){
        curso="CSS3"
        for (let i=0;i<gCSS3.length;i++){
            suma+=parseInt(gCSS3[i]);
        }
        promedio=suma/gCSS3.length;
    }
    if(num==3){
        curso="JAVASCRIPT"
        for (let i=0;i<gJAVA.length;i++){
            suma+=parseInt(gJAVA[i]);
        }
        promedio= suma/gJAVA.length;
    }
    if (num==4){
        curso="NODEJS"
        for (let i=0;i<gNODE.length;i++){
            suma+=parseInt(gNODE[i]);
        }
        promedio= suma/gNODE.length;
    }else{
        console.log(`Las opciones son:
         1-HTML5
         2-CSS3
         3-JAVASCRIPT
         4-NODEJS`)
    }
    return promedio
}
console.log("El promedio de los graduados es de: ",calcularYMostrar(gCSS3,gHTML5,gJAVA,gNODE,2));
