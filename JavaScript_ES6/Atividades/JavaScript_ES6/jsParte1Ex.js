/*

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


//ATIVIDADE 2 JS BASICO
//A
var id = 0;
function addBox() {
  var margim = Math.floor((Math.random() * 1000) + 1);
  var margimLeft = Math.floor((Math.random() * 1000) + 1);
  var obj = document.createElement('div');
  obj.style.width='100px';
  obj.style.height='100px';
  obj.style.position='absolute';
  obj.style.marginTop=margim+'px';
  obj.style.marginLeft=(margimLeft+100)+'px';
  obj.id=id;
  obj.style.backgroundColor='blue';
  obj.setAttribute('onmouseover', "trocaCor(this)");
  var local = document.querySelector('#app');
  local.appendChild(obj);
  id+=1;
}

//B
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }
 
 function trocaCor(x){
   x.style.backgroundColor=getRandomColor();

 }


 //C
 var nomes = ["Diego", "Gabriel", "Guilherme"];
 var objeto = document.createElement('ul');
 objeto.id="lista";
 var local = document.querySelector('#app');
 local.appendChild(objeto);

for (var i = 0; i < nomes.length; i++) {
    var name = nomes[i];
    var ul = document.getElementById("lista");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}

//D
function adicionar(x){

    var name = document.querySelector('#conteudo');
    var ul = document.getElementById("lista");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name.value));
    ul.appendChild(li);
    name.value=null;
}

ATIVIDADE 3 
//A

function verificaIdade() {
    var valor = document.querySelector('#conteudo');
    checaIdade(valor.value)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });

}
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve();
        } else {
            reject();
        }
    })
}

//B

function listaRepositorios() {
    var valor = document.querySelector('#conteudo');
    axios.get('https://api.github.com/users/' + valor.value + '/repos')
        .then(function (response) {
            var objeto = document.createElement('ul');
            objeto.id = "lista";
            var local = document.querySelector('#app');
            local.appendChild(objeto);

            for (var i = 0; i < response.data.length; i++) {
                var name = response.data[i].html_url;
                var ul = document.getElementById("lista");
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.setAttribute('href', name);
                a.appendChild(document.createTextNode(name));
                li.appendChild(a);
                ul.appendChild(li);
            }
        })
}

//C

function listaRepositorios() {
    var objeto = document.createElement('ol');
    objeto.id = "lista";
    var local = document.querySelector('#app');
    local.appendChild(objeto);
    var ol = document.getElementById("lista");
    var li = document.createElement('li');
    li.id="liLoading"
    li.appendChild(document.createTextNode('Carregando...'));
    ol.appendChild(li);
    
    var liLoading = document.querySelector('#liLoading');

    var valor = document.querySelector('#conteudo');
    axios.get('https://api.github.com/users/' + valor.value + '/repos')
        .then(function (response) {
            liLoading.parentNode.removeChild( liLoading );
            for (var i = 0; i < response.data.length; i++) {
                var name = response.data[i].html_url;
                var ol = document.getElementById("lista");
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.setAttribute('href', name);
                a.appendChild(document.createTextNode(name));
                li.appendChild(a);
                ol.appendChild(li);
            }
        })
        .catch(function(error){
            liLoading.parentNode.removeChild( liLoading );
            console.log('Erro na requisição.')
        });
}

*/