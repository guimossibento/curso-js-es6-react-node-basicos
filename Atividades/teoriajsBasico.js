var listElement = document.querySelector('#app2 ul');
var inputElement = document.querySelector('#app2 input');
var buttonElement = document.querySelector('#app2 button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

class Teste{
    metodo(){

    }
     
    outro(){
        
    }
}
function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

import { promises } from "dns";


const a =5;
const usuario = {
    nome: "Diego"
}


usuario.nome = 'Cleiton';
console.log(usuario.nome);
class TodoList{
    constructor(){
        this.todos=[];
    }
     
    addTodo(){
        this.todos.push('novo');
        console.log(this.todos);
    }
}

class outra extends TodoList{
    constructor(){
        super();

        this.usuario = "Diego";
        
    }    

    mostraUsuario(){
      console.log(this.usuario);
    }
}

var MinhaLista = new outra();

MinhaLista.mostraUsuario();
class Matematica{
    static soma(a , b){
        return a + b;
    }
}
document.getElementById('novotodo').onclick=function(){
    MinhaLista.addTodo();
} 

function teste(x) {
    let y =2;
    if (x > y) {
        console.log(x, y);
    }
}

teste(10);

console.log(Matematica.soma(1,2));


//OPERACAO COM ARRAIS 

const arr = [1,3,4,5,6,8,9];

const newArr = arr.map(function (item) {
    return item * 2;
})

console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
})

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;    
})

console.log(filter);

//ES6 arrows
const arr =[1,3,4,5,6];

const nerArr = arr.map(item=> item * 2);

console.log(newArr);

