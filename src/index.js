import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './_store/index'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
 

const createStoreWithMiddleware = process.env.NODE_ENV !== 'production'?applyMiddleware(promiseMiddleware, ReduxThunk,logger)(createStore):
applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
const reduxStore = process.env.NODE_ENV !== 'production'?createStoreWithMiddleware(store,window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()):createStoreWithMiddleware(store);
ReactDOM.render(
<Provider store={reduxStore}> 
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
