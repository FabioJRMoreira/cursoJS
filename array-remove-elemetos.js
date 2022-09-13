const notas = [10,7,8,5,10];
//remove o ultimo elemento se nao especificar a possicao
notas.pop();
console.log(notas);
let media = (notas[0]+ notas[1]+notas[2]+notas[3])/notas.length
console.log(` A media é ${media}`);


const jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)