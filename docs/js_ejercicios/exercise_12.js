"use strict";
// Pedir un número, mostrar si es un número primo o no.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result = document.getElementById("result");
  let num = document.getElementById("num").value;

  if (num < 2) {
    alert("Ingrese un número Valido, que sea mayor a 2.");
    return;
  }
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }

    if (count === 2) {
      result.innerHTML = `El número ${num}, es PRIMO`;
    } else {
      result.innerHTML = `El número ${num}, no es PRIMO `;
    }
  }
});
