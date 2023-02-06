'use strict'

// Pedir un número, mostrar si es positivo, negativo o si es cero.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num = document.getElementById('num').value;
    
    if (num < 0) {
        result.innerHTML=`El número ${num} es Negativo.` 
    } else if (num === "0") {
        result.innerHTML=`El número ${num} es igual a cero.`
    } else {
        result.innerHTML=`El número ${num} es positivo.`
    }
})