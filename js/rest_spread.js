//REST 
const usuario ={
    nome: "Diego",
    idade: 23, 
    empresa: "Rockedseat"
};

const {nome, ...resto}=usuario;

console.log(nome);
console.log(resto);

function soma(...params){
    return params.reduce((total, next)=> total+next);
}

console.log(soma(1, 2, 3));



//SPREAD 

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome:"Diego",
    idade:23,
    empresa: "teste"
}

const usuario2 = {
    ...usuario1, 
    nome: "Gabriel"
}

console.log(usuario2);