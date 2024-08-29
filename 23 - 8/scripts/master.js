function ramdomEntreCeroX(x) {
  //funcion que me devuelva un numero entre 0 - x
  let numero = Math.random(); //nos devuelve un numero entre cero y uno
  numero = numero * x;
  return Math.floor(numero);
}
let numeroRandom = ramdomEntreCeroX(10);
console.log(numeroRandom);
//objetos//son tipos de datos
let alumno = {
  nombre: "juan",
  edad: 17,
  deporte: "fubtol",
};
console.log(alumno.nombre);
alumno.nombre = "pedro"; //asignacion - natacion de punto
console.log(alumno.nombre);
let { nombre, edad, deporte } = alumno; //desestructuración de objetos
console.log(nombre, edad, alumno);
//json - javascript objet notatión
let objetoJson = { nombre: "juan", edad: "17", deporte: "futbol" };
