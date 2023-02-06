'use strict'
// Pedir un número, mostrar si es par, impar o si es cero.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result');
    let num = document.getElementById('num').value;
    
    if (num % 2 === "0") {
        result.innerHTML=`El número ingresado: ${num} es par.`;
    } else if (num % 2 !== 0) {
        result.innerHTML=`El número ingresado:${num}, es impar.`;
    } else if (num === "0") {
        result.innerHTML=`El número ingresado: ${num}, es cero. ` 
    }
})