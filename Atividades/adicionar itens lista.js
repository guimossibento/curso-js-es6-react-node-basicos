//D
function adicionar(x){

    var name = document.querySelector('#conteudo');
    var ul = document.getElementById("lista");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name.value));
    ul.appendChild(li);
    name.value=null;
}
