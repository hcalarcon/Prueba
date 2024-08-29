//Array
let edad1;
let edad2;
let edad3;

let edades = []; //vacio
const edad = [17, 18, 16];
let nombre = ["jaun", "pedro", "jose"];
let judadores = [
  { nombre: "juan", edad: 17, skill: "" },
  { nombre: "pedron", edad: 16, skill: "" },
];
//areglo bidimencional
let partidas = [[], {}, "", 15];

//notacion de corchetes obtengo un elemento
console.log("la edad es: ", edad[0]);
//notacion de corchetes para asignar valor a un elemento
edad[0] = 15;

//metodos de los arreglos:
edades.push(5); //agregar un elemento al final
edad.pop(); //quita el ultimo elemento

//longitud
edad.length();

console.log("edad 1:", edad[0]);
console.log("edad 2:", edad[1]);

edad.map((edad) => {
  console.log("la edad es", edad);
});
