'use strict'

// Pedir dos números, mostrar la suma.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    result.innerHTML=`La suma de los números es ${Number(form.num1.value) + Number(form.num2.value)} `  
})