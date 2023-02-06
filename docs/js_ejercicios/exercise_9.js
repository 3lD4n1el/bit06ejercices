'use strict'
// Pedir un número, mostrar el doble de n más 4.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num = document.getElementById('num').value;
    const doble = (num * 2 + 4);
    result.innerHTML=`El doble del número ${num}, más "4" es: ${doble} `  
})