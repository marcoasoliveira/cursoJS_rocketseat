var todos = JSON.parse(localStorage.getItem('list_todos')) || ['Estudar','Fazer café', 'Entrar no site']; 
//transforma dados do storage em array ou atribui valores default caso não tenha nada no storage

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function renderTodos(){
    listElement.innerHTML='';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onClick','deleteTodo('+ pos +')');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value='';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    //pega a lista de to do e salva no storage
    localStorage.setItem('list_todos',JSON.stringify(todos)); 
    //não grava vetores e objetos, somente chave e valor em string
    //JSON.stringify() converte o array todos em string
}

buttonElement.onclick=addTodo;