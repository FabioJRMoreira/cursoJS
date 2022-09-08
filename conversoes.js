//importacia do tipo de dados que estamos trabalhando 
// booleanos

// conversao implicita 
const numero = 456;
const numeroString = '456';
//compara tipo e valor
//console.log(numero===numeroString);
//coversao implicita
//compara somente o valor
//console.log(numero==numeroString);
//console.log(numero+numeroString);

//conversao explicita

// Number() --> transforma uma string em numero
// String() --> transforma um numero em string
console.log(numero+ Number(numeroString));
console.log(String(numero)+numeroString);

