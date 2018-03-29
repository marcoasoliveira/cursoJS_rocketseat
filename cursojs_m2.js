//módulo 2 - MANIPULAÇÃO DA DOM

/*1) Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um 
quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo 
quadrado deve aparecer na tela.*/

//1
var i=0;
function criaQuadrado() {
    var quadrado = document.createElement('div');
    quadrado.style.width='100px';
    quadrado.style.height='100px';
    quadrado.style.backgroundColor='#f00';
    quadrado.setAttribute('id','qd'+i);
    quadrado.setAttribute('onmouseover','mudaCor('+i+')');
    var div = document.querySelector('#app');
    div.appendChild(quadrado);
    i++;
}

var btnBotao = document.querySelector('button#ex1');
btnBotao.onclick=function(){
  criaQuadrado();
}

/*2) Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por 
cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:*/

//2
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function mudaCor(div){
    var quad = document.getElementById('qd'+div);
    var newColor = getRandomColor(); // #E943F0
    quad.style.backgroundColor=newColor;
}


//3) A partir do seguinte vetor:

var nomes = ['Diego', 'Gabriel', 'Lucas'];

//Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
//  * Diego
//  * Gabriel
//  * Lucas

var lista = document.createElement('ul');
for(var nome of nomes){
    var itemLista = document.createElement('li');
    var nomeLista = document.createTextNode(nome);
    itemLista.appendChild(nomeLista);
    lista.appendChild(itemLista);
}
var divLista = document.querySelector('#ex3');
divLista.appendChild(lista);

/*4) Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de 
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais 
itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
*/

var divInput = document.createElement('input');
divInput.setAttribute('type','text');
divInput.setAttribute('name','nome');
var divBotao = document.createElement('button');
divBotao.setAttribute('onClick','adicionar()');
var txtBotao = document.createTextNode('Adicionar');
divBotao.appendChild(txtBotao);
divLista.appendChild(divInput);
divLista.appendChild(divBotao);

function adicionar(){
    var inputValor = document.querySelector('input[name=nome]');
    if(nomes.indexOf(inputValor.value)===-1){
        nomes.push(inputValor.value);
        var itemLista = document.createElement('li');
        var nomeLista = document.createTextNode(inputValor.value);
        itemLista.appendChild(nomeLista);
        lista.appendChild(itemLista);
    }
    inputValor.value='';
}

//5)Dado o seguinte vetor: 

var users = [
    {
      nome: 'Diego',
      idade: 23,
      sexo: 'M',
    },
    {
      nome: 'Gabriela',
      idade: 18,
      sexo: 'F',
    },
    {
      nome: 'Abelardo',
      idade: 30,
      sexo: 'M',
    },
    {
      nome: 'Maria',
      idade: 27,
      sexo: 'F',
    }
  ];

/*Exiba os dados em tela em forma de lista como a seguir e crie 3 botões abaixo:

<ul>
  <li>Diego é homem e possui 23 anos</li>
  <li>Gabriela é mulher e possui 18 anos</li>
  <li>José é homem e possui 30 anos</li>
  <li>Maria é mulher e possui 27 anos</li>
</ul>

<button onClick="">Ordenar por nome</button>
<button onClick="">Ordenar por idade</button>

<button onClick="">Exibir apenas homens</button>
<button onClick="">Exibir apenas mulheres</button>
<button onClick="">Exibir todos</button>

Os dois primeiros botões devem ordenar a lista, por nome e por idade. Os outros 3 botões 
devem aplicar filtros na lista exibindo apenas homens, apenas mulheres ou todos. 
Lembrando que o filtro deve funcionar junto da ordenação então deve ser possível filtrar 
apenas homens e ordenar por idade.
*/

function geraLista(){
    var listaDesafio = document.createElement('ul');
    for(var x of users){
        var itemListaDesafio = document.createElement('li');
        if(x.sexo=='M'){
        var textoItemDesafio = document.createTextNode(x.nome+' é um homem e possui '+x.idade+' anos');
        }else{
            var textoItemDesafio = document.createTextNode(x.nome+' é uma mulher e possui '+x.idade+' anos');
        }
        itemListaDesafio.appendChild(textoItemDesafio);
        listaDesafio.appendChild(itemListaDesafio);
    }
    return listaDesafio;
}

var divDesafio = document.querySelector('#ex5');
divDesafio.appendChild(geraLista());

var btnOrdenaNome = document.createElement('button');
btnOrdenaNome.setAttribute('onClick','ordenaNome()');
var btnText = document.createTextNode('Ordenar por nome');
btnOrdenaNome.appendChild(btnText);

var btnOrdenaIdade = document.createElement('button');
btnOrdenaIdade.setAttribute('onClick','ordenaIdade()');
btnText = document.createTextNode('Ordenar por idade');
btnOrdenaIdade.appendChild(btnText);

var btnApenasHomens = document.createElement('button');
btnApenasHomens.setAttribute('onClick','exibeHomens()');
btnText = document.createTextNode('Apenas Homens');
btnApenasHomens.appendChild(btnText);

var btnApenasMulheres = document.createElement('button');
btnApenasMulheres.setAttribute('onClick','exibeMulheres()');
btnText = document.createTextNode('Apenas Mulheres');
btnApenasMulheres.appendChild(btnText);

var btnTodos = document.createElement('button');
btnTodos.setAttribute('onClick','exibeTodos()');
btnText = document.createTextNode('Exibe Todos');
btnTodos.appendChild(btnText);

divDesafioBtn = document.querySelector('#ex5btn')
divDesafioBtn.appendChild(btnOrdenaNome);
divDesafioBtn.appendChild(btnOrdenaIdade);
divDesafioBtn.appendChild(btnApenasHomens);
divDesafioBtn.appendChild(btnApenasMulheres);
divDesafioBtn.appendChild(btnTodos);

function reOrdena(){
    var lista5 = document.querySelector('#ex5 ul');
    divDesafio.removeChild(lista5);
    divDesafio.appendChild(geraLista());
}


function ordenaNome(){
    users.sort(function(a,b){
        if(a.nome<b.nome){
            return -1;
        }else if(a.nome>b.nome){
            return 1;
        }else{
            return 0;
        }
    });
    reOrdena();    
}

function ordenaIdade() {
    users.sort(function(a,b){
        if(a.idade<b.idade){
            return -1;
        }else if(a.idade>b.idade){
            return 1;
        }else{
            return 0;
        }
    });
    reOrdena();
}

function exibeHomens() {
    
}

function exibeMulheres() {
    
}

function exibeTodos() {
    
}
