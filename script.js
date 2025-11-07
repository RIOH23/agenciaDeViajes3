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