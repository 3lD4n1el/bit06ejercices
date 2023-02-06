'use strict'

// Pedir un número, mostrar el triple de n.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num = document.getElementById('num').value;
    const doble = (num * 3);
    result.innerHTML=`El triple del número ${num}, es: ${doble} `  
})