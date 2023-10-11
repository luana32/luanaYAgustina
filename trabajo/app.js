const datosBici= require('./datosBici')

let dhBici={
    bicicletas: datosBici.traerBicicleta(),
    buscarBici: function(id){

        let encontrarBicicleta=this.bicicletas.filter(bicicleta =>bicicleta.id==id)
        if (encontrarBicicleta.length>0){
            return encontrarBicicleta[0]
        }
        else{
            return null;
        }
    },
    venderBici: function(id){
        let estadoBicicleta=this.bicicletas
        }

}
console.log(dhBici)
console.log(dhBici.buscarBici(2))