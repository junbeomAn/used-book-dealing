import {createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import combinedReducers from './modules';
import ReduxThunk from 'redux-thunk';

const reducers = combinedReducers;
const middlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = () => createStore(reducers, composeEnhancers(applyMiddleware(...middlewares, ReduxThunk)));

export default configure;