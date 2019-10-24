//ATIVIDADE 1 JS BASICO
//A
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };
   
console.log('O usuário mora em '+endereco.cidade+'/'+endereco.uf+', no bairro '+endereco.bairro+', na rua "'+endereco.rua+'" com nº '+endereco.numero);

//B
function pares(x, y) {
    for (var i=x; i<=y; i++){
        if(i % 2===0){
            console.log(i);
        };
    }
}

pares(1,100);

//C
function procuraHabilidade(vetor){
    
    return console.log((vetor.indexOf("Javascript")!=-1))
}

var skills = ["Javascript", "ReactJS", "React Native"];
procuraHabilidade(skills); // true ou false


//D 
function experiencia(anos) {
    if (anos >=0 && anos <=1) {
        return 'Iniciante'
    }else if(anos > 1 && anos<= 3){
        return 'Intermediário'
    }else if(anos > 3 && anos<= 6){
        return 'Avançado'
    }else{
        return 'Jedi Master'
    }
}
var anosEstudo = 8;
console.log(experiencia(anosEstudo));
  // De 0-1 ano: Iniciante
  // De 1-3 anos: Intermediário
  // De 3-6 anos: Avançado
  // De 7 acima: Jedi Master

//E
   var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

for (let i of usuarios) {
  console.log('O ' + i.nome + ' possui as habilidades: ' + i.habilidades.join(', '))
}