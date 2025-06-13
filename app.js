const {Calculadora} = require("./clases/Calculadora");
const {Pokemon} = require("./clases/pokemon");

/*console.log("Hello, World!");
let contador = 0;
let name = "edgar";
const age = 30;
var apellido = "gonzalez";
let sueldo = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
let num = 1;

function sumar10(numero) {
    contador +=1;
    return numero * 10;
}

while(num != Infinity) {
    num = sumar10(num);
    console.log(num);
}
console.log(`El contador es: ${contador}`);

let carreras = {
    tsu: "Tecnico Superior Universitario",
    ing: "Ingeniero",
    maestria: "Maestria en Ciencias de la Computacion",
    doctorado: "Doctorado en Ciencias de la Computacion"
}


console.log(`Hola, mi nombre es ${name} y tengo ${age} años. Mi apellido es ${apellido} y mi sueldo es ${sueldo}.`);

const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2
const { a, b, resultado } = calculadora.multiplicar(5, 3);
console.log(`Multiplicando ${a} y ${b} el resultado es ${resultado}`);

let lista = calculadora.getResultados();


console.log("Resultados de las operaciones:");
lista.forEach((item) => {
    console.log(`ID: ${item.id}, Operacion: ${item.operacion}, Valor A: ${item.valorA}, Valor B: ${item.valorB}, Resultado: ${item.resultado}`);
});


let busqueda = lista.find((item) => {
    return item.id === 1;
});


console.log(`buscado: ${busqueda}`);

let indice = lista.findIndex((item) => {
    if(item.id === 1) {
        return item.id === 1;
    }
});
console.log(`Indice del resultado buscado: ${indice}`);

lista[indice] = {
    id: 4,
    operacion: "perro",
    valorA: 54,
    valorB: 6,
    resultado: 1000
};

let eliminado = lista.splice(indice, 1);
console.log(`Resultado eliminado: ID: ${eliminado[0].id}, Operacion: ${eliminado[0].operacion}, Valor A: ${eliminado[0].valorA}, Valor B: ${eliminado[0].valorB}, Resultado: ${eliminado[0].resultado}`);
console.log("Resultados actualizados: ", lista);*/

const pokemon = new Pokemon();
pokemon.getPokemon("pikachu");