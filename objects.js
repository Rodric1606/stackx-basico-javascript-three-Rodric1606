// Calcula o perímetro e a área de um retângulo

let retangulo = {
    largura: 5,
    altura: 8,
};

function calcularRetangulo(retangulo) {
    let perímetro = 2 * (retangulo.largura + retangulo.altura);
    let area = retangulo.altura * retangulo.largura;

    return{perímetro, area}
}

console.log(calcularRetangulo(retangulo))

// Verifica se uma pessoa é maior de idade

const pessoa = {
    nome: 'Rodrigo',
    idade: 41,
    cidade: 'Joinville'
}

function ehAdulto(pessoa) {
    return pessoa.idade >=18
}

if(ehAdulto(pessoa)){
    console.log(`${pessoa.nome} é maior de idade.`)
} else{
    console.log(`${pessoa.nome} é menor de idade.`)
}


// Concatena os valores de um objeto em uma string

const obj = {
    nome: 'Bob',
    idade: 35,
    cidade: 'London',
};

function concatenaValores(obj) {
    let texto = "";

    for(let item in obj){
        texto += obj[item] + " ";
    }

    return texto.trim();
}

console.log(concatenaValores(obj))

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
