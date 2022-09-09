//usa ==> flexa

const apresantarArrow = nome => `meu nome é ${nome}`;

const soma = (n1,n2)=> n1+n2;

//Arrow function com + de 1 linha de instrucao
const somaNumeroPequenos = (n1,n2) => {
    if(n1>n2||n2>10){
        return "Somente numeros de 1a 9";
    }else{
        return n1+n2;
    }
}