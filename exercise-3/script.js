function render(content) {
 const imc = document.getElementById('result'); 
 imc.innerHTML = content; 
}

const weight = prompt("Introduce el peso (kg)"); // paso 1
const height = prompt("Introduce la altura (m)"); // paso 2
const imc = weight/(height**2) // paso 3
if (imc >= 35 && imc < 40) {
 render(`<p>Eres Obesidad de clase II, tu IMC es: ${imc}</p>`);
} else {
 render(`<p>No eres Obeso de clase II, tu IMC es: ${imc} </p>`);
};