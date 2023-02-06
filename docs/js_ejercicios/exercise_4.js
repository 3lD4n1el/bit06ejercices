'use strict'

// Pedir un número y mostrar los números pares desde 1 hasta n.


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = document.getElementById('result');
    const num = document.getElementById('num').value;
    let pares =" ";

    for (let i = 1; i < num; i++) {
        if ( i % 2 === 0) {
            pares += i + ', ';
        }
         
    } title.innerHTML=`Los números pares de ${num} son ${pares}`

})