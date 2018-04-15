import React, { Component } from 'react'
import '../../css/bootstrap.css'

export default class Nota extends Component {
    render (){
       return(
        <div className="card rounded col-sm-4">
            <div className="card-body">
                <h5 className="card-title">{this.props.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ this.props.dataCriacao}</h6>
                <p className="card-text">{ this.props.texto }</p>
                <button className = "btn btn-outline-danger">Excluir</button>
            </div>
        </div>
       )
    }
}