const listaDeChamada = ['João','Ana','Caio','Lara','Marjorie','leo'];

//metodo splice --> permite remove um elemento de qualquer lugar da lista e add um elemento em qualquer lugar de lista 
// pede 3 parametros --> idice de inicio, quatidade de elementos a ser removido apartir do elemento de inicio, o que vai ser add

//listaDeChamada.splice(1,2,"Rodrigo");
// caso noa queira remover coloca 0 no segundo parametro
listaDeChamada.splice(1,0,"Rodrigo");

console.log(`Lista de chamada ${listaDeChamada}`)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)