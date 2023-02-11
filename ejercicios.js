'use strict'

// Programa que retorne el área de un cuadrado.

/* function Calcular(lado) {
    return lado * lado;
}

var variable = 6
var area = Calcular(variable)
console.log("el area es " + area) */

// Programa que retorne el área de un triángulo.

function Calcular(base, altura) {
    return (base * altura) /2;
}

var variableBase = 6
var variableAltura = 7
var area = Calcular(variableBase, variableAltura)
console.log("el area es " + area)

// una funcion si dice que es palindromo o no 

const esPalindromo = (string) => {
    const stringPalabra = string.ReplaceAll(' ','');
    let palabra = string.split('');
    palabra = palabra.reverse('');
    palabra = palabra.join('');
    return stringPalabra === palabra;
};
console.log()