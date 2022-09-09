// == (comparacao implicita)

const numero =3;
const texto = '3';

console.log(numero==texto)
//noa faz a conversao de valores 
//compara o tipo e valor 
console.log(numero===texto)

//typeof --> tipo de dado da variavel

console.log(typeof(numero));
console.log(typeof(texto));

// == so compara o valor 
// === compara o valor e o tipo de dado (recomendado por ser boa pratica) use a conversao explicita Nunmber() e String()
