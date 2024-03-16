import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
  <HashRouter  basename='https://kanakdrishtiinfotec.github.io/Claws_Project'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);


