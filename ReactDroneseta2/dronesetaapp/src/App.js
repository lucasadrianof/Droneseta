import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class App extends Component {

    componentDidMount(){
        console.log("teste");
    }

    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-default">

                    <div className="navbar-header">
                        <a className="navbar-brand">DRONESETA</a>
                    </div>
                    <div className="navbar-collapse" id="barra-navegacao">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/CadastrarProduto"><button className='btn btn-default'>Cadastrar Produto</button></Link></li>
                            <li><Link to="/CadastrarUsuario"><button className='btn btn-default'>Cadastrar Usuario</button></Link></li>
                            <li><Link to="/Carrinho"><button className='btn btn-default'>Carrinho</button></Link></li>
                            <li><Link to="/Login"><button className='btn btn-default'>Login</button></Link></li>
                        </ul>
                    </div>

                </nav>

                <section>

                    <div className="row">
                        <div className="col-md-6">
                            <h2>Produtos disponíveis</h2>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <button type="button" className="btn btn-primary pull-right" disabled="disabled">Adicionar
                                ao carrinho
                            </button>
                        </div>
                    </div>

                    <div className="container row">
                        <table className="table table-bordered" id="tabelaProdutos">

                        </table>
                    </div>

                </section>
            </div>

        )
    }
}

export default App;
