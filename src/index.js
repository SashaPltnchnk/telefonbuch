import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createLogger} from "redux-logger"
import createSaga from 'redux-saga'
import rootSaga from './store/sagas'
import { requestsPromiseMiddleware } from 'redux-saga-requests'
import thunk from 'redux-thunk';
import contactReducer from './store/reducers/contacts';
import modalReducer from './store/reducers/modal';
import serchReducer from './store/reducers/search';
import ReactJoiValidations from 'react-joi-validation';
import Joi from 'joi-browser';

ReactJoiValidations.setJoi(Joi);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = createLogger({diff: true, collapsed: true})
const saga = createSaga()

const rootReducer = combineReducers({
    contact: contactReducer,
    modal: modalReducer,
    search: serchReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, requestsPromiseMiddleware(), saga, logger)
));

saga.run(rootSaga)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();