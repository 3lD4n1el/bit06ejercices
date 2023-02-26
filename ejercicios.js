'use strict'

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