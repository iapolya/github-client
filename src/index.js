import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {Provider} from "react-redux";
import store from './app/store';
import Login from "./app/containers/Login";
import Search from "./app/containers/Search";
import Profile from "./app/containers/Profile";
import Repository from "./app/containers/Repository";
import MyProfile from "./app/containers/MyProfile";

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${
            localStorage.getItem('token')
            }`,
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache,
});

ReactDOM.render((
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/repository/:login/:name' component={Repository} />
                        <Route path='/profile/:login' component={Profile} />
                        <Route path='/my-profile' component={MyProfile} />
                        <Route path='/search' component={Search} />
                    </Switch>
                </App>
            </BrowserRouter>
        </ApolloProvider>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();

export default client;
