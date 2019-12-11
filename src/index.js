import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RepositoriesList from "./app/containers/RepositoriesList";
import {Provider} from "react-redux";
import store from './app/store';
import Login from "./app/containers/Login";
import Search from "./app/containers/Search";

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/repositories' component={RepositoriesList} />
                    <Route path='/search' component={Search} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
