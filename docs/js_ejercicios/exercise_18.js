'use strict'
// Pedir dos números, mostrar si el primer número es divisible por el segundo.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result')
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    const number = num1 % num2;
    if (number === 0) {
        result.innerHTML=`La primer cifra: ${num1} si es divisible por la segunda cifra: ${num2}`
    }else {
    result.innerHTML=`La primer cifra: ${num1} no es divisible por la segunda cifra: ${num2}. `  
}
})