var MatrizMoneda;
var dinero;
var monedas;
function calcular() {

    monedas = document.getElementById("Monedas").value
    MatrizMoneda = monedas.split(","); // EN EL VECTOR 'MatrizMoneda' quedan guardadas las monedas

    dinero = document.getElementById("Dinero").value
    alert('Las Moneds para Cambio de: ' + dinero);

}

function graficar() {
    var canvas = document.getElementById("canvasGrafica");
    var lapiz = canvas.getContext("2d");
    lapiz.fillStyle = "#FF0000";
    lapiz.fillStyle = "#FFF";
    t = 100;
    for (i = 1; i <= MatrizMoneda.length; i++) {

        lapiz.beginPath() //iniciar ruta

        lapiz.strokeStyle = "blue"; //color externo
        lapiz.fillStyle = "yellow"; //color de relleno

        lapiz.arc(i * 110, 50, 50, 0, 2 * Math.PI, false); //circulo
        lapiz.fill();

        lapiz.fillStyle = "red"; //color de relleno
        texto = "$" + MatrizMoneda[i - 1];
        lapiz.font = "bold 15px arial";
        lapiz.strokeText(texto, i * 110, 50); //texto con los dos métodos
        lapiz.fillText(texto, i * 110, 50);

        lapiz.fillStyle = "black"; //color de relleno
        texto = "Cant= ";
        lapiz.font = "bold 15px arial";
        lapiz.strokeText(texto, i * 110, 120); //texto con los dos métodos
        lapiz.fillText(texto, i * 110, 120);
        t += 100;
    }

}
