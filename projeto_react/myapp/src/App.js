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
      novaNotaTitulo: '',
      novaNotaData: '',
      novaNotaTexto: '',
      novaNota: '', //estado inicial variável que recebe uma nova nota
      notas: []
    }
    this.adicionaNota = this.adicionaNota.bind(this)
  }

  adicionaNota(nota){
    nota.preventDefault()
    const data = new Date()
    const novaNota = {titulo: this.state.novaNotaTitulo, 
                      data: data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear()+' - '+data.getHours()+'h'+data.getMinutes()+'m', 
                      texto: this.state.novaNotaTexto}
    const notasAntigas = this.state.notas
    if(novaNota){
      this.setState({
        notas: [novaNota, ...notasAntigas], //comportamento semelhante ao .push(), adiciona novaNota ao array junto a todas as outras
        novaNotaTitulo: '', 
        novaNotaData: '',
        novaNotaTexto: '', 
        novaNota: ''
      })
    }
  }

  removeNota(idNota){
    console.log(idNota)
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
                      <input 
                        type = "text" 
                        className = "form-control" 
                        id="titulo_nota"
                        value = { this.state.novaNotaTitulo }
                        onInput = { (event) => this.setState({ novaNotaTitulo: event.target.value }) } />
                    </div>
                    <div className = "form-group">
                        <span
                          className={`nova_nota ${ this.state.novaNotaTexto.length > 200 /*verifica se a qtd de caracteres é maior que 200, se for altera o estilo do span para avisar*/
                             ? 'novaNota-invalida':'' } 
                        `}/> { this.state.novaNotaTexto.length } / 200 {/*contador de caracteres*/}
                        <textarea 
                           className="form-control" 
                           id="nova_nota"
                           value = { this.state.novaNotaTexto } /*define que o valor inserido na textarea é o valor presente em novaNota*/
                           onInput = { (event) => this.setState({ novaNotaTexto: event.target.value })} /*insere no estado da variável cada caracter digitado*/
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
                  (nota, index) => 
                  <Nota
                    key = {nota + index}  /* insere os itens na props da Nota */
                    titulo = {nota.titulo}
                    dataCriacao = {nota.data}
                    texto = {nota.texto}
                    remove = {index}
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
