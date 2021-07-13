'use strict';

// 3rd party resources
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import React from 'react';

// Esoteric resources
import App from './App';
import rootReducers from './store/reducer/index.js'

const store = createStore(rootReducers)
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

