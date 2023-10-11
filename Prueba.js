function reporteDePasajeros(estaciones) {
    const reporte = [];
    let pasajeros = 200; // El tren parte con 200 pasajeros
    reporte.push(`En la estación 0 hay ${pasajeros} pasajeros arriba del tren`);
    for (let i = 1; i <= estaciones; i++) {
        
        if (i == 5) {
            pasajeros -= 80; // En la estación Florida se bajan 80 pasajeros
            pasajeros += 120; // En la estación Florida se suben 120 pasajeros
            reporte.push(`En la estación ${i} hay ${pasajeros} pasajeros arriba del tren`)

        } else {
            pasajeros += 50; // Se suben 50 pasajeros en cada estación
            pasajeros -= 30; // Se bajan 30 pasajeros en todas las estaciones excepto Florida
            reporte.push(`En la estación ${i} hay ${pasajeros} pasajeros arriba del tren`)
        }

    }
    return reporte;
}

// Ejemplos de uso
console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(3));
console.log(reporteDePasajeros(5));