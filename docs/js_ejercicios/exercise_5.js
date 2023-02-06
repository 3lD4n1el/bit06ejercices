'use strict'

// Pedir un número, mostrar el doble de n.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num = document.getElementById('num').value;
    const doble = (num * 2);
    result.innerHTML=`El doble del número ${num}, es: ${doble} `  
})