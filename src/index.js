// Redux imports
import { Provider } from 'react-redux';
import reducers from './_reducers';
import { createStore, applyMiddleware } from 'redux';

// Dependencies imports
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';

// Components imports
import App from './App';

// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
