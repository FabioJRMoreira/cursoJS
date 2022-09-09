function soma(n1,n2){
    return n1+n2;
}

// console.log(soma(2,2))
// console.log(soma(245,20))
// console.log(soma(-45,2))

function multiplica(n1=1,n2=1){
    return n1*n2;
}

console.log(multiplica(soma(2,5),soma(3,2)))
console.log(multiplica(soma(2,5)))