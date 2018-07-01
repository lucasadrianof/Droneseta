import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Login extends Component{

    state = {
        cpf: 123,
        senha: ''
    };

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

                <div className="container row">

                    <div className="card card-container col-md-12">
                        <div className="card card-container col-md-4">
                            <form className="form-signin" action="#">
                                <span id="reauth-email" className="reauth-email"></span>
                                <input type="email" id="inputEmail" className="form-control" placeholder="CPF" autoFocus />
                                <input type="password" id="inputPassword" className="form-control" placeholder="Senha" autoFocus="true"/>
                                <input className="btn btn-lg btn-primary btn-block btn-signin" type="submit" value='Sign in ' onClick={this._handleSubmit}/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Login;