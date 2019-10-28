"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var usuarioMaior = usuarios.filter(function (item) {
  return item.idade >= 18;
});
console.log(usuarioMaior);
var find = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(find);

for (var chave in usuarios) {
  usuarios[chave].idade *= 2;
}

var ateCinquenta = usuarios.filter(function (item) {
  return item.idade < 50;
});
console.log(ateCinquenta);
