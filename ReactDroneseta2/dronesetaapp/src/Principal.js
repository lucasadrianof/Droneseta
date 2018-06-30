import React, {Component} from 'react';
import './App.css';

class Principal extends Component{

    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-default">

                        <div className="navbar-header">
                            <a className="navbar-brand">DRONESETA</a>
                        </div>
                        <div className="navbar-collapse" id="barra-navegacao">
                            <ul className="nav navbar-nav navbar-right">
                                <li><button className='btn btn-default'>Cadastrar Produto</button></li>
                                <li><button className='btn btn-default'>Carrinho</button></li>
                                <li><button className='btn btn-default'>Cadastrar</button></li>
                                <li><button className='btn btn-default'>Login</button></li>
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

export default Principal;