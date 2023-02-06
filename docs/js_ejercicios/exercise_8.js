'use strict'

// Pedir un número, mostrar n reducido en 5.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num = document.getElementById('num').value;
    const doble = (num - 5);
    result.innerHTML=`La reducción del número ${num}, es: ${doble} `  
})