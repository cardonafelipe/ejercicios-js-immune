function render(content) {
 const resultElement = document.getElementById('result'); 
 resultElement.innerHTML = content; 
}

const firstString = prompt("Introduce el primer string"); // paso 1
const secondString = prompt("Introduce el segundo string"); // paso 2
const concatResult = firstString + secondString; // paso 3
console.log("Length of concatenated string:", concatResult.length);
render(`<p>El resultado es: ${concatResult.length}</p>`);