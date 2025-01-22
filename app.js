let numeroSecreto;
let intentos = 1;
let listanumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `acertaste el número en ${intentos} veces`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "el numero secreto es menor");
    } else {
      asignarTextoElemento("p", "el numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
  console.log(numeroGenerado);
  console.log(listanumerosSorteados);

  if (listanumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se completaron todos los números posibles");
  } else {
    if (listanumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto(); //recursividad permite que la función se llame a si misma, tener cuidado colocando la condicion de salida
    } else {
      listanumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número random");
  asignarTextoElemento("p", `ingresa un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
