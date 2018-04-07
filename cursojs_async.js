// utilizando AJAX sem uso de biblioteca

var xml = new XMLHttpRequest(); //funcionalidade que da acesso ao AJAX para recuperar informação
xml.open('GET','https://api.github.com/users/marcoasoliveira');
xml.send(null);
xml.onreadystatechange = function(){
    if(xml.readyState === 4){
        console.log(JSON.parse(xml.responseText)); // resposta do github vem em JSON e precisa ser convertida para vertor        
    }
}

// Promises
/* São linhas de código que não irão influenciar na linha de tempo do javascript, retornam o resultado
de uma solicitação de pois de um tempo */

var minhaPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/marcoasoliveira');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

/*var resultado = minhaPromise();
console.log(resultado); -- console.log rodou antes que a função minhaPromise terminasse de executar, por isso o retorno no console foi "pending"
*/

//definindo o retorno da promise corretamente:
minhaPromise()
 .then(function(response){
     console.log(response);//uma função ou código que dependa do retorno da solicitação, deve estar dentro desse .then
 }) //é executado quando o resolve da promisse é chamado
 .catch(function(error){
     console.warn(error);
 });

 //UTILIZANDO A BIBLIOTECA AXIOS (api gera um encapsulamento do XMLhttpRequest)
 axios.get('https://api.github.com/users/marcoasoliveira')
 .then(function(response){//uma função ou código que dependa do retorno da solicitação, deve estar dentro desse .then
     console.log(response);//retorna todos os dados
     console.log(response.data.created_at); //retorna um dado específico
     console.log(response.data.html_url);
 }) //é executado quando o resolve da promisse é chamado
 .catch(function(error){
     console.warn(error);
 });