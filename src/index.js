import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from "./app/components/Auth";
import RepositoriesList from "./app/containers/RepositoriesList";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./app/reducers";

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Auth}/>
                    <Route path='/repositories' component={RepositoriesList} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
