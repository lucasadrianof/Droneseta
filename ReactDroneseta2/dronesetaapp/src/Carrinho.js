import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Carrinho extends Component{

    state = {

    }

    _handleInputs = event => {
        switch (event.target.name){
            case 'cpf':
                this.setState({
                    cpf: event.target.value
                });
                break;
            case 'senha':
                this.setState({
                    senha: event.target.value
                });
                break;
            default:
        }
    };

    _handleSubmit = () => {
        console.log(this.state)
    };

    render(){
        return(

            <section className="container">
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

                <form>
                    <div className="page-header">
                        <h2>Carrinho de compras</h2>
                    </div>

                    <div className="row container">
                        <h3>Itens do carrinho</h3>
                    </div>

                    <div className="row container">

                        <table className="table table-bordered">
                            <tr>
                                <td className="col-md-1">
                                    <label>
                                        <input type="checkbox"/>
                                    </label>
                                </td>
                                <td>Descrição</td>
                                <td>Tamanho</td>
                                <td>Preço</td>
                            </tr>
                            <tr>
                                <td className="col-md-1">
                                    <label>
                                        <input type="checkbox"/>
                                    </label>
                                </td>
                                <td>Descrição</td>
                                <td>Tamanho</td>
                                <td>Preço</td>
                            </tr>
                            <tr>
                                <td className="col-md-1">
                                    <label>
                                        <input type="checkbox"/>
                                    </label>
                                </td>
                                <td>Descrição</td>
                                <td>Tamanho</td>
                                <td>Preço</td>
                            </tr>
                        </table>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <h3 className="pull-right">Total: <span className="label label-success">R$ 99.90</span></h3>
                        </div>
                    </div>
                    <br/>
                    <div className="row container">
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                            <div className="col-md-8">
                                <button type="button" className="btn btn-danger pull-right" disabled="disabled">Remover do carrinho</button>
                            </div>
                            <div className="col-md-4">
                                <input type="submit" className="btn btn-primary" href="carrinho-segunda-etapa.html" value="Prosseguir"/>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        )
    }

}

export default Carrinho;