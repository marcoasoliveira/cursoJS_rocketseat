/* 1) Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 
2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 
anos de idade o resultado deve cair no .then, caso contrário, no .catch */

function checaIdade(idade) {
  // Retornar uma promise
  return new Promise(function(resolve,reject){
    if(idade >= 18){
      setTimeout(resolve,2000,'Maior de idade');
    }else{
      setTimeout(reject,2000,'Menor de idade');
    }
  })
}

checaIdade(20)
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  })

/* 2) Crie uma tela com um <input> que deve receber o nome de um usuário no Github. 
Após digitar o nome do usuário e clicar no botão buscar a aplicação deve buscar pela API 
do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
 */

 /* 3) A partir do resultado do exemplo anterior adicione um indicador de carregamento 
 em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
 */

var divElement = document.querySelector('#app');
var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'user');
var btnElement = document.createElement('button');
btnElement.setAttribute('onclick','')
var btnText = document.createTextNode('Adicionar');
var listaElement = document.createElement('ul');
btnElement.appendChild(btnText);
divElement.appendChild(inputElement);
divElement.appendChild(btnElement);

function getUser(user){
  var pTexto = document.createElement('p');
  var loadTexto = document.createTextNode('Carregando...');
  pTexto.appendChild(loadTexto);
  listaElement.appendChild(pTexto);
  axios.get('https://api.github.com/users/'+user)
  .then(function(response){
    listaElement.innerHTML='';
    var repos = response.data.public_repos;
    for(var i = 0; i < repos; i++){
      var itemLista = document.createElement('li');
      var linkItemLista = document.createElement('a');
      linkItemLista.setAttribute('href','#');
      var linkText = document.createTextNode('Repo '+(i+1));
      linkItemLista.appendChild(linkText);
      itemLista.appendChild(linkItemLista);
      listaElement.appendChild(itemLista);
    }
    divElement.appendChild(listaElement);
  })
  .catch(function(error){
    listaElement.innerHTML='';
    var h1Element = document.createElement('p');
    var h1Text = document.createTextNode('Usuário não encontrado - '+ error);
    h1Element.appendChild(h1Text);
    listaElement.appendChild(h1Element);
    divElement.appendChild(listaElement);
  });
}

var btnBotao = document.querySelector('button');
btnBotao.onclick=function(){
  listaElement.innerHTML='';
  var user = document.querySelector('input[name="user"]');
  getUser(user.value);
}