// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
const numeros = [0, 1, 2, 3, 4, 5];

function dobrarNumeros(numeros) {
    return numeros.map(numeros => numeros * 2);
}

console.log(dobrarNumeros(numeros))

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

const array = [-1, 0, 5];
console.log(somarValores(array))




// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);  
}

console.log(filtrarPares(numeros)); 

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};