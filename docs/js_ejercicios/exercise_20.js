'use strict'
// Pedir un número, mostrar la suma total desde 1 hasta n.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result');
    // const num = document.getElementById('num').value;
    // let form = document.getElementById('form');
    
    let res = 0;

    for (let i = 0; i <= Number(form.num.value); i++) {
        res = res + i;
    }

    result.innerHTML = `La suma de los números da como resultado = ${res}`;
});