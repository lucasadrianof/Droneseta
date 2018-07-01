import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class ProdutosMaisVendidos extends Component{


    componentDidMount(){
        fetch('http://localhost:8080/JavaDroneseta/webresources/produtos/maisvendidos/', {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        }).then(function(response){
            console.log(response.json());
        }).catch(function (err) {
            console.error(err);
        });
    }

    render(){
        return(

            <div className="container">
                <nav className="navbar navbar-default">

                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">DRONESETA</a>
                    </div>
                    <div className="navbar-collapse" id="barra-navegacao">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/"><button className='btn btn-default'>Inicio</button></Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Produtos mais Vendidos</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProdutosMaisVendidos;