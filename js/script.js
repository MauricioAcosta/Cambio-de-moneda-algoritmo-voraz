var MatrizMoneda;
var dinero;
var monedas;
function calcular() {

    monedas = document.getElementById("Monedas").value
    MatrizMoneda = monedas.split(","); // EN EL VECTOR 'MatrizMoneda' quedan guardadas las monedas

    dinero = document.getElementById("Dinero").value
    alert('Las Monedas para Cambio de: ' + dinero+" son "+ MatrizMoneda);

    var cambio = devolverCambio(dinero,MatrizMoneda)
    var muestra = document.getElementById('Muestra')
    muestra.innerHTML="\n"+cambio

}

//da el cambio de n unidades utilizando el menor
//numero posible de monedas. la constante C especifica el
//numero de monedas disponibles
function devolverCambio(n,c) {
//n es conjunto de monedas
  //var C = [100, 25, 10, 5, 1]
  var S = new Array() // S es el conjunto que contendra la solucion
  var s = 0 // s es la suma de los elementos de S
  while (s != n) {
    x = Math.max(...c);//El mayor elemento de C
    if (s + x <= n) { //Se puede cambiar la condicion, pero la dejo asi para que se entienda, puede ponerse negada y tener solo el else
      x = x
    } else {
      //no encuentro la solucion
      return 'No encuento la solucion'
    }
    S.push(x)
    s = s + x
  }
  console.log('S es el conjunto que contendra la solucion'+S);
  return S
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
        texto = "";//Cant=
        lapiz.font = "bold 15px arial";
        lapiz.strokeText(texto, i * 110, 120); //texto con los dos métodos
        lapiz.fillText(texto, i * 110, 120);
        t += 100;
    }

}
