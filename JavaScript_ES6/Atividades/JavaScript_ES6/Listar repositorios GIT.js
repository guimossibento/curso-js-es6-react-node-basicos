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