'use strict'
// Pedir dos números, mostrar el resto de la división.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    result.innerHTML=`El reciduo de la división de estás dos cifras es: ${Number(form.num1.value) % Number(form.num2.value)} `  
})