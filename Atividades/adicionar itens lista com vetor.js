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
