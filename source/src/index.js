import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './store';
import { csrfFetch } from "./store/csrf";


const store = configureStore();

if (process.env.NODE_ENV !== "production") {


  // window.csrfFetch = csrfFetch;
  window.store = store;


}
function Root() {
  return (



    <Provider store={store}>
      <App />
    </Provider>




  );


}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
