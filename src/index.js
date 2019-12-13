import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import Login from "./app/pages/Login";
import Search from "./app/pages/Search";
import Profile from "./app/pages/Profile";
import Repository from "./app/pages/Repository";
import MyProfile from "./app/pages/MyProfile";

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
), document.getElementById('root'));

serviceWorker.unregister();

export default client;
