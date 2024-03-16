import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter  basename='/Claws_Project'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


