const nomes = ['João','Juliana','Ana','Caio','Lara','Marjorie','Guilherme',
              'Aline','Fabiana','Andre','Carlos','Paulo','Bia',
              'Viviane','Isabela','Vinicius','Renan','Renata','Daisy','Camilo'];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`alunos da sala1 : ${sala1 }`);
console.log(`alunos da sala2 : ${sala2}`);