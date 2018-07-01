import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class CadastrarUsuario extends Component{

    state = {
        cpf: 0,
        nome: '',
        senha: '',
        cartaoCredito: '',

        rua: '',
        numero: 0,
        complemento: '',
        bairro: '',
        cidade: '',

        ruaEntrega: '',
        numeroEntrega: 0,
        complementoEntrega: '',
        bairroEntrega: '',
        cidadeEntrega: ''

    };

    _handleInputs = event => {
        switch (event.target.name){
            case 'cpf':
                this.setState({
                    cpf: event.target.value
                });
                break;
            case 'nome':
                this.setState({
                    nome: event.target.value
                });
                break;
            case 'senha':
                this.setState({
                    senha: event.target.value
                });
                break;
            case 'cartaoCredito':
                this.setState({
                    cartaoCredito: event.target.value
                });
                break;
            case 'rua':
                this.setState({
                    rua: event.target.value
                });
                break;
            case 'numero':
                this.setState({
                    numero: event.target.value
                });
                break;
            case 'complemento':
                this.setState({
                    complemento: event.target.value
                });
                break;
            case 'bairro':
                this.setState({
                    bairro: event.target.value
                });
                break;
            case 'cidade':
                this.setState({
                    cidade: event.target.value
                });
                break;
            case 'ruaEntrega':
                this.setState({
                    ruaEntrega: event.target.value
                });
                break;
            case 'numeroEntrega':
                this.setState({
                    numeroEntrega: event.target.value
                });
                break;
            case 'complementoEntrega':
                this.setState({
                    complementoEntrega: event.target.value
                });
                break;
            case 'bairroEntrega':
                this.setState({
                    bairroEntrega: event.target.value
                });
                break;
            case 'cidadeEntrega':
                this.setState({
                    cidadeEntrega: event.target.value
                });
                break;
            default:
        }
    };

    _handleSubmit = () => {

        let data = {
            cpf: this.state.cpf,
            nome: this.state.nome,
            senha: this.state.senha,
            cartaoCredito: this.state.cartaoCredito,

            endereco: {
                rua: this.state.rua,
                numero: this.state.numero,
                complemento: this.state.complemento,
                bairro: this.state.bairro,
                cidade: this.state.cidade
            },

            enderecoEntrega: {
                rua: this.state.ruaEntrega,
                numero: this.state.numeroEntrega,
                complemento: this.state.complementoEntrega,
                bairro: this.state.bairroEntrega,
                cidade: this.state.cidadeEntrega
            }

        };

        fetch("http://localhost:8080/JavaDroneseta/webresources/usuarios/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })

    };

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

                <section>
                    <div className="page-header">
                        <h2>Cadastrar Usuário</h2>
                    </div>
                    <form className="form-horizontal">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Nome:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name='nome' id="nome" placeholder="Nome" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">CPF:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" name='cpf' id="cpf" placeholder="cpf" onChange={this._handleInputs}/>
                                    </div>
                                    <label className="col-sm-1 control-label">Cartão:</label>
                                    <div className="col-sm-5">
                                        <input type="text" className="form-control" id="cartaoCredito" name='cartaoCredito' placeholder="Número do cartão de crédito" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Senha:</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="senha" name='senha' placeholder="Senha" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Rua:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="rua" name='rua' placeholder="Rua" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Número:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="numero" className="form-control" name='numero' placeholder="Número da residência" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Complemento:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="complemento" className="form-control" name='complemento' placeholder="Complemento" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Bairro:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="bairro" className="form-control" name='bairro' placeholder="Bairro" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Cidade:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="cidade" className="form-control" name='cidade' placeholder="Cidade" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Rua de Entrega:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="ruaEntrega" name='ruaEntrega' placeholder="Rua" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Número de Entrega:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="numeroEntrega" className="form-control" name='numeroEntrega' placeholder="Número da residência" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Complemento de Entrega:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="complementoEntrega" className="form-control" name='complementoEntrega' placeholder="Complemento" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Bairro de Entrega:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="bairroEntrega" className="form-control" name='bairroEntrega' placeholder="Bairro" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Cidade de Entrega:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="cidadeEntrega" className="form-control" name='cidadeEntrega' placeholder="Cidade" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <input className="btn btn-primary pull-right" type="submit" id="cadastrar" value="Cadastrar" onClick={this._handleSubmit}/>
                            </div>
                        </div>
                    </form>

                </section>
            </div>
        )
    }

}

export default CadastrarUsuario;