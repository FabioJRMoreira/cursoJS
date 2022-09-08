//var -> primeira que apareceu no js e tem escopo em todo o codigo
// var altura = 5;
// var comprimento = 7;

// area = altura*comprimento;

// console.log(area)
// var area;


//let --> recomentado usar pois tem o escopo menos abrangente que a var
// let altura=5;
// let comprimento=7;
// let forma = "retangulo";
// let area;
// if(forma==='retangulo'){
//     area = altura * comprimento;
    
// }else{
//     area = (altura * comprimento)/2;
// }
// console.log(area);

//const --> constante nao pode ser alterada apos atribuicao

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;
if(forma==='quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento)/2;
}
console.log(area);


