import React, { Component, Fragment } from 'react';

//Componentes
import Cabecalho from './components/Header'
import Nota from './components/Nota'

//import logo from './logo.svg';
//import './App.css';

class App extends Component {

  constructor(){
    super()
    
    this.state = {
      novaNota: '', //estado inicial variável que recebe uma nova nota
      notas: []
    }
    this.adicionaNota = this.adicionaNota.bind(this)
  }

  adicionaNota(nota){
    nota.preventDefault()
    const novaNota = this.state.novaNota
    const notasAntigas = this.state.notas
    if(novaNota){
      this.setState({
        notas: [novaNota, ...notasAntigas], //comportamento semelhante ao .push(), adiciona novaNota ao array junto a todas as outras
        novaNota: ''
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Cabecalho/>
        <div className = "container">
        <div className="row">
          <div className="col-sm-3">
                <form 
                  className="novaNota"
                  onSubmit= { this.adicionaNota }>
                    <div className = "form-group">
                      <label htmlFor = "titulo_nota"> Título da Nota </label>
                      <input type = "text" className = "form-control" id="titulo_nota"/>
                    </div>
                    <div className = "form-group" hidden>
                      <input type = "text" className = "form-control" id="data_nota"/>
                    </div>
                    <div className = "form-group">
                        <span
                          className={`nova_nota ${ this.state.novaNota.length > 200 /*verifica se a qtd de caracteres é maior que 200, se for altera o estilo do span para avisar*/
                             ? 'novaNota-invalida':'' } 
                        `}/> { this.state.novaNota.length } / 200 {/*contador de caracteres*/}
                        <textarea 
                           className="form-control" 
                           id="nova_nota"
                           value = { this.state.novaNota } /*define que o valor inserido na textarea é o valor presente em novaNota*/
                           onInput = { (event) => this.setState({ novaNota: event.target.value })} /*insere no estado da variável cada caracter digitado*/
                           aria-describedby="O que achou do filme"
                           placeholder = "Escreva uma nota"/>
                    </div>
                    <button 
                       className="btn btn-primary"
                       disabled={ this.state.novaNota.length > 200 ? true : false} 
                       type="submit">Enviar</button>
                </form>
            </div>
            <div className = "col-sm-8">
              <div className = "row">
                {this.state.notas.map(   /* mapeia a variável notas procurando notas salvas, se houver, exibe na tela com o componente Nota */
                  (notaInfo, index) => 
                  <Nota
                    key = {notaInfo + index}  /* insere os itens na props da Nota */
                    texto = {notaInfo}
                    titulo = 'Vai ter um titulo aqui'
                    dataCriacao = 'e uma data aqui'
                  /> 
                )}
              </div>
            </div>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
