const alunos = ['Joao','Juliana','caio','Ana'];
const mediasDosAlunos = [10,7,9,6]
let listaDeNotasEAlunos=[alunos,mediasDosAlunos];

const exibeNomeNota=(nomeDoAluno)=> {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let index = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return `${listaDeNotasEAlunos[0][index]} sua media é ${listaDeNotasEAlunos[1][index]}`;
    }else{
        return `Aluno nao encontrado no banco de dados com o nome :${nomeDoAluno}`;
    }
}

console.log(exibeNomeNota('Ana'));
console.log(exibeNomeNota('Joao'));
console.log(exibeNomeNota('Nemo'));