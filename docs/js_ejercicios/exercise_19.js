'use strict'
// Pedir dos números y el nombre de una operación, mostrar el resultado.
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let result = document.getElementById('result')
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operacion = document.getElementsByName('operacion')

    

    switch (operacion) {
        case "suma":
            result.innerHTML = `${num1 + num2}`;
            break;

        case 'resta':
            result.innerHTML = `${Number(form.num1.value) - Number(form.num2.value)}`;
            break;

        case 'multiplicacion':
            result.innerHTML = `${Number(form.num1.value) * Number(form.num2.value)}`;
            break;

        case 'division':
            result.innerHTML = `${Number(form.num1.value) / Number(form.num2.value)}`;
            break;
    }
  
})
