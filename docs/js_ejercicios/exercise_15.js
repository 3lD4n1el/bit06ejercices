'use strict'
// Pedir dos números, mostrar la multiplicación.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    result.innerHTML=`El resultado de la multiplicación de los números es ${Number(form.num1.value) * Number(form.num2.value)} `  
})