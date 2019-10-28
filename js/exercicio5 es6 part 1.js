5.1 
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y]=arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


// function soma...
function soma(...params){
    return params.reduce((total, next) => total+next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

5.2 
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
   /*Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
   Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.*/   

const usuario2 = {...usuario, nome:'Gabriel'};
const usuario3 = {...usuario, endereco: {cidade:'Lontras'}};

console.log(usuario2);
console.log(usuario3);