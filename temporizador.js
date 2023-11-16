let horas = 8;
let minutos = 0;
let segundos = 0;

cargarSegundo();

function cargarSegundo() {
    let txtSegundos;

    if (segundos < 0) {
        segundos = 59;
    }
    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos();
}

function cargarMinutos() {
    let txtMinutos;

    if (segundos === -1) {
        setTimeout(() => {
            if (minutos !== 0) {
                minutos--;
            } else {
                minutos = 59;
                if (horas !== 0) {
                    horas--;
                } else {
                    horas = 2; // Ajusta aquí el valor de horas como desees
                }
            }
        }, 500);
    }

    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras();
}

function cargarHoras() {
    let txtHoras;

    if (segundos === -1 && minutos === 0 && horas !== 0) {
        setTimeout(() => {
            horas--;
        }, 500);
    }

    if (horas < 10) {
        txtHoras = `0${horas}`;
    } else {
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
}

setInterval(cargarSegundo, 1000)