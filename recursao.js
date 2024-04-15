
// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  let soma = 0;
  for(let i = 1; i<= n;i++){
    soma += i;
  }
  return soma;
}

// Verifica se um número é par
function ehPar(n) {
  if(n % 2 === 0){
    return `${n} é par`
  } else{
    return `${n} é impar`
  }
}


function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let resultibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      resultibonacci.push(resultibonacci[i - 1] + resultibonacci[i - 2]);
    }
    return resultibonacci;
  }
}

const n = 7
const resultSomarNumero = somaNumeros(n);
const resultEhPar = ehPar(n)
const resultibonacci = fibonacci(n)

console.log(resultSomarNumero)
console.log(resultEhPar)
console.log(resultibonacci)

module.exports = { somaNumeros, ehPar, fibonacci };