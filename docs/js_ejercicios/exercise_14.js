'use strict'

// Pedir dos números, mostrar la resta.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    result.innerHTML=`La resta de los números es ${Number(form.num1.value) - Number(form.num2.value)} `  
})