import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastrarProduto from "./CadastrarProduto";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/CadastrarProduto" component={CadastrarProduto} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
