var formularioIndividual = document.getElementById("individual");

function calcularIndividual() {
    total = 0;
    var vuelo = formularioIndividual.vuelo.value;

    if (vuelo == "sin-avion") {
        total += 999;
    }
    else if ( vuelo == "ida") {
        total += 2499;
    }
    else if (vuelo == "ida-vuelta") {
        total += 5999;
    }
    else {
        alert ("Por favor, seleccione una opcion de vuelo.");
        return;
    }

    var hospedaje = formularioIndividual.hospedaje.value;

    if (hospedaje == "sin-hotel") {
        total += 499;
    }
    else if (hospedaje == "sencilla") {
        total += 799;
    }
    else if (hospedaje == "doble") {
        total += 999;
    }
    else {
        alert ("Por favor, seleccione una opcion de hospedaje.");
        return;
    }
    
    var adultos = formularioIndividual.adultos.value;

    switch (adultos) {
        case "1":
            total += 865;
            break;
        case "2": 
            total += (865*2);
            break;
        case "3": 
            total += (865*3);
            break;
        case "4": 
            total += (865*4);
            break;
        case "5": 
            total += (865*5);
            break;
    }

    var menores = formularioIndividual.menores.value;

    switch (menores) {
        case "0": 
            total += 0;
            break;
        case "1": 
            total += 437;
            break;
        case "2": 
            total += (437*2);
            break;
        case "3": 
            total += (437*3);
            break;
        case "4": 
            total += (437*4);
            break;
    }

    var diasIndividual = formularioIndividual["dias-individual"].value;
    var numDias = parseInt(diasIndividual);

    if (isNaN(numDias) || numDias <= 0) {
        alert("Por favor, ingrese un número válido de días.");
        return;
    }

    total += (numDias * 769);

    formularioIndividual.totalIndividual.value = total;
}

var formularioPaquetero = document.getElementById("paquetero");

function calcularPaquete() {
    total = 0;
    var destino = formularioPaquetero.destino.value;

    if (destino == "suramerica") {
        total += 7999;
    }
    else if (destino == "europa") {
        total += 21999;
    }
    else if (destino == "africa") {
        total += 17999;
    }
    else if (destino == "asia") {
        total += 25999;
    }
    else if (destino == "norteamerica") {
        total += 12999;
    }
    else {
        alert ("Por favor, seleccione un destino.");
        return;
    }

    var diasPaquetero = formularioPaquetero["dias-paquete"].value;
    var numDias = parseInt(diasPaquetero);

    if (isNaN(numDias) || numDias <= 0) {
        alert("Por favor, ingrese un número válido de días.");
        return;
    }
    total += (numDias * 899);

    var paqueteEspecial = formularioPaquetero.especial.checked;

    if (paqueteEspecial) {
        total += 19999;
    }

    var costoPorExtra = 699;
    var listaDeExtras = formularioPaquetero.extras;
    var extrasSeleccionados = 0;
    for (var i = 0; i < listaDeExtras.length; i++) { 
        if (listaDeExtras[i].checked) {
            extrasSeleccionados++;
        }
    }
    total += (extrasSeleccionados * costoPorExtra);


    formularioPaquetero.totalPaquetero.value = total;
}