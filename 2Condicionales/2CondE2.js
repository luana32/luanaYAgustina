let pagoMes=2000
let consumoKWH=350
let pagoActual = consumoKWH > 300 ? ((pagoMes/100*20) + pagoMes)  : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de",consumoKWH,
 "kwh, en base al ajuste tarifario\n(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),\ncumplimos con informarle que se ha ajustado el total a pagar, que será de $"
 ,pagoActual);