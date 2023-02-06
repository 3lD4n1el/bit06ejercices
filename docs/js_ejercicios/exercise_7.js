'use strict'
// Pedir un número, mostrar la tercera parte de n.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num = document.getElementById('num').value;
    const doble = (num / 3).toFixed(2);
    result.innerHTML=`El doble del número ${num}, es: ${doble} `  
})