import React, { Component } from 'react'
import '../../css/bootstrap.css'

export default class Cabecalho extends Component {
    render(){
        return(
           <header className="cabecalho">
                <ul className="nav navbar-expand-lg navbar-light bg-light justify-content-end">
                    <a className="navbar-brand" href=""> Projeto de React</a>
                    <li className="nav-item">
                        <a href="" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Lista</a>
                    </li>
                </ul>
           </header>
        )
    }
}