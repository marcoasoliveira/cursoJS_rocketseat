//1) CRIE UMA FUNÇÃO QUE DADO O OBJSETO A SEGUIR:

var endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP'
};

//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.

function ex1(end){
    console.log('O usuário mora em '+ endereco.cidade +'/'+ endereco.uf +', no bairro '+ endereco.bairro +', na "'+ endereco.rua +'" com nº'+ endereco.numero +'.');
}

ex1(endereco);

//2) Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
    for(var i=x; i<=y; i++){
        if(i%2==0){
            console.log(i);
        }
    }
  }
  
  pares(32, 321);

  //3) Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

  function temHabilidade(skills) {
    if(skills.indexOf('Javascript')!=-1){
        console.log(true);
    }else{
        console.log(false);
    }
  }
  
  var skills = ['Javascript', 'ReactJS', 'React Native'];
  temHabilidade(skills); // true ou false

  //4) Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

  function experiencia(anos) {
    if (anos>0 && anos<=1) {
        console.log('Iniciante');
    }else if (anos>1 && anos<=3) {
        console.log('Intermediário');
    }else if (anos>3 && anos<=6) {
        console.log('Avançado');
    }else if (anos>6) {
        console.log('Jedi Master');
    }else{
        console.log('tempo inválido');
    }
  }
  
  var anosEstudo = 7;
  experiencia(anosEstudo);
  
  // De 0-1 ano: Iniciante
  // De 1-3 anos: Intermediário
  // De 3-6 anos: Avançado
  // De 7 acima: Jedi Master

  //5) Dado o seguinte vetor de objetos:

  var usuarios = [
    {
      nome: 'Diego',
      habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
      nome: 'Gabriel',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
  ];

  /*
  Escreva uma função que produza o seguinte resultado:
  O Diego possui as habilidades: Javascript, ReactJS, Redux
  O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
  */

  function ex5(user) {
      for(var i of user){
          console.log('O '+i.nome+' possui as habilidades: '+i.habilidades.join(','));
      }
  }

  ex5(usuarios);