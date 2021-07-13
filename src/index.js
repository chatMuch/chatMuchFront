
// Esoteric resources
import App from './App';
import rootReducers from './store/reducer/index.js'

// 3rd party resources
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'
import React from 'react';


const store = createStore(rootReducers)
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

