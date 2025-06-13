const { resultados } = require("./bd/resultado");

class Calculadora {
    sumar(a, b) {
        let resultado = {
            id: resultados.length + 1,
            operacion: "suma",
            valorA: a,
            valorB: b,
            resultado: a + b
        }
        resultados.push(resultado);
        return a + b;
    }

    restar(a, b) {
        let resultado = {
            id: resultados.length + 1,
            operacion: "resta",
            valorA: a,
            valorB: b,
            resultado: a - b
        }
        resultados.push(resultado);
        return a - b;
    }

    multiplicar = (a, b) => {
        let resultado = {
            id: resultados.length + 1,
            operacion: "multiplicacion",
            valorA: a,
            valorB: b,
            resultado: a * b
        }
        resultados.push(resultado);
        return resultado;
    }

    dividir = (a, b) => {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        let resultado = {
            id: resultados.length + 1,
            operacion: "division",
            valorA: a,
            valorB: b,
            resultado: a / b
        }
        resultados.push(resultado);
        return resultado;
    };
    getResultados = () => {
        return resultados;
    }

}

module.exports = {
    Calculadora
};