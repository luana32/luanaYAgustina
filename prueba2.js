 function(patente) {
  const autoEncontrado = this.buscarAuto(patente);

  if (autoEncontrado) {
     autoEncontrado.vendido = true;
     return autoEncontrado;
  } else {
     return null; // Indicar que el auto no fue encontrado
  }
}