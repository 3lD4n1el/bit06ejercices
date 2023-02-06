'use strict'
// Pedir edad al usuario y responder si es o no es mayor de edad.

let form = document.getElementById('form');
let title = document.getElementById('title'); 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const age = Number(form.edad.value)

    if ( age >= 18) {
        title.innerHTML = 'Si es mayor de edad';
    } else {
        title.innerHTML = 'No es mayor de edad';
    }
})
