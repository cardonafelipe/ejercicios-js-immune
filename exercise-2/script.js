function render(content) {
 const fahrenheit = document.getElementById('result'); 
 fahrenheit.innerHTML = content; 
}

const celsius = prompt("Introduce los grados en Celsius"); // paso 1
const fahrenheit = (9/5*celsius)+32 ; // paso 2
render(`<p>El resultado es: ${fahrenheit}</p>`);