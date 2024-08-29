function sumar(a, b) {
  return a + b;
}

function dividir(a, b) {
  if (b > 0) {
    return a / b;
  } else {
    alert("chabon media pila");
  }
}

let resta = (a, b) => a - b;

let multiplicar = (a, b) => a * b;

let numeroUno = parseInt(prompt("Ingresar un numero"));
let numeroDos = parseInt(prompt("Ingresar otro numero"));

let operacion = prompt(" .. opciones");

switch (operacion) {
  case 1:
    sumar(numeroUno, numeroDos);
    break;
}
