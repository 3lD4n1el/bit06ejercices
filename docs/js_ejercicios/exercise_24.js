'use strict'
// Pedir un número, mostrar los números desde n hasta 0.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result');
    const num =document.getElementById('num').value;

    for (let i = num; i > -1; i--) {
        result.innerHTML=`Números desde n a 0, son ${num , i}`;
    }



})