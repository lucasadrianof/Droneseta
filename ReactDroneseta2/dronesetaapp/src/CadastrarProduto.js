import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class CadastrarProduto extends Component{

    state = {
        descricao: '',
        preco: 0,
        tamanho: '',
        urlFoto: ''
    }

    _handleInputs = event => {
        switch (event.target.name){
            case 'descricao':
                this.setState({
                    descricao: event.target.value
                });
                break;
            case 'preco':
                this.setState({
                    preco: event.target.value
                });
                break;
            case 'tamanho':
                this.setState({
                    tamanho: event.target.value
                });
                break;
            case 'urlfoto':
                this.setState({
                    urlFoto: event.target.value
                });
                break;
            default:
        }
    };

    _handleSubmit = () => {

        let data = {
            descricao: this.state.descricao,
            preco: this.state.preco,
            tamanho: this.state.tamanho,
            urlFoto: this.state.urlFoto
        };

        fetch("http://localhost:8080/JavaDroneseta/webresources/produtos/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        });

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
                        <h2>Cadastrar produto</h2>
                    </div>
                    <form className="form-horizontal">
                        <div className="row">
                            <div className="col-md-10">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Descrição:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name='descricao' id="inputDescricao" placeholder="Descrição" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  className="col-sm-2 control-label">Tamanho:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" name='tamanho' id="inputTamanho" placeholder="Tamanho" onChange={this._handleInputs}/>
                                    </div>
                                    <label className="col-sm-1 control-label">Preço:</label>
                                    <div className="col-sm-5">
                                        <input type="text" className="form-control" id="inputPreco" name='preco' placeholder="Preço" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Quantidade:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputQtdade" name='quantidade' placeholder="Quantidade por tamanho" onChange={this._handleInputs}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">URL da imagem:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="inputUrl" className="form-control" name='urlfoto' placeholder="https://..." onChange={this._handleInputs}/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <input className="btn btn-primary pull-right" type="button" id="cadastrar" value="Cadastrar" onClick={this._handleSubmit}/>
                            </div>
                        </div>
                    </form>

                </section>
            </div>

        )
    }

}

export default CadastrarProduto;