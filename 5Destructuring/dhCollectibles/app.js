const impor = require('./collectibles');

let array1= impor.importar("Star Wars");
let array2= impor.importar("Hot Toys");
let array3= impor.importar("Bandai");



let unifiedCollectibles = [...array1, ...array2, ...array3];


let collectibles={
    figuras: unifiedCollectibles,
    listFigures:function(){
        this.figuras.forEach((figuras)=>{
            console.log(figuras);
        })
    } ,
    figuresByBrand: function(marca){
        this.figuras.filter((figura)=>{
            figura.marca == marca
        })
    }
}
console.log(collectibles.listFigures)