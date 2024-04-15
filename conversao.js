// Converte uma string para um número inteiro

function convertToInt(string) {
    texto = string.trim();

    if(texto === ""){
        return 0
    }
    let resultInt = 0
    let numNegativo = false;
    
    if(texto[0]==='-'){
        texto = texto.slice(1);
        numNegativo = true;
    }

    for(let i = 0; i < texto.length; i++){
 
        const num = parseInt(texto[i]);
        if(isNaN(num)){
            return NaN;
        }
        resultInt = resultInt * 10 + num
    }

    if(numNegativo == true){
        resultInt *= -1;
    }

    return resultInt
}


// Converte um número inteiro para uma string
function convertToString(number) {

    let resultString = '';

    if(number ===0){
        return '0';
    }
  
    let numNegativo = false;

    if(number < 0){
        numNegativo = true;
        number = Math.abs(number);
    }

    while(number > 0){
        const num = number % 10;
        resultString = String(num) + resultString;
        number = Math.floor(number / 10);
    }

    if(numNegativo){
        resultString = '-' + resultString;
    }
    return resultString;
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    
    if (typeof value === 'boolean') {
        return value;
    } else if (typeof value === 'number') {
        return value !== 0;
    } else if (typeof value === 'string') {
        return value.trim() !== '';
    } else if (typeof value === 'object' && value !== null) {
        return true;
    } else {
        return false;
    }
}

module.exports = { convertToInt, convertToString, convertToBoolean };