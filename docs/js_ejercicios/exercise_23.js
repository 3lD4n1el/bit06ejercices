'use strict'
// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = document.getElementById('result');
    // const num = document.getElementById('num').value;
    // res = [];

  for (let i = 0; i <= Number(form.num.value); i++) {
    if (i % 3 === 0 ) {
        res = [];
        res.push(i);
    } false;
  }
  result.innerHTML = `La suma total de los multiplos es ${res}`
})