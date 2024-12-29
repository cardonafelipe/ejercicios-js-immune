function render(content) {
 const imc = document.getElementById('result'); 
 imc.innerHTML = content; 
}

const weight = prompt("Introduce el peso (kg)"); // paso 1
const height = prompt("Introduce la altura (m)"); // paso 2
const imc = weight/(height**2) // paso 3
render(`<p>El resultado es: ${imc}</p>`);