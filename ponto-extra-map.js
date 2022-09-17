const notas = [10,9,8,7,6];
// usando map
const notasAtualizadas =notas.map(nota=> nota==10 ? nota : ++nota);

notasAtualizadas.forEach(nota => console.log(nota));
