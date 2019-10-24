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