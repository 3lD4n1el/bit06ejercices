'use strict'
// Pedir nombre al usuario y saludarlo.
let form = document.getElementById('form');
let title = document.getElementById('title');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    title.innerHTML = `Hola y bienvenido ${form.name.value}`;
    
});
