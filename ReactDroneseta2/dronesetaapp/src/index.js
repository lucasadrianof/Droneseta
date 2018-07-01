import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastrarProduto from "./CadastrarProduto";
import Login from './Login';
import CadastrarUsuario from './CadastrarUsuario';
import ProdutosMiasVendidos from './ProdutosMaisVendidos';
import Carrinho from './Carrinho';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/CadastrarProduto" component={CadastrarProduto} />
            <Route path="/CadastrarUsuario" component={CadastrarUsuario} />
            <Route path="/ProdutosMaisVendidos" component={ProdutosMiasVendidos} />
            <Route path="/Login" component={Login} />
            <Route path="/Carrinho" component={Carrinho} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
