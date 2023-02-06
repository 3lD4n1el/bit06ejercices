'use strict'
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result');
    // let num = document.getElementById('num').value;
    let res = 0;

    for (let i = 0; i <= Number(form.num.value); i++) {
        if (i % 2 === 0) {
            res = res + i;   
        }
    }
    result.innerHTML = ` El resultado de la suma de los números pares es = ${res}`


})