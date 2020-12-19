import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RestoService from './services/resto-service'
import RestoServiceContext from './components/resto-service-context'
import store from './store'
import LangState from './components/context/Lang';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';


const restoService = new RestoService()
ReactDOM.render(
  <Provider store={store}>
    <RestoServiceContext.Provider value = {restoService}>
  <React.StrictMode>
    <LangState>
      <Router>
        <App/>
    </Router>
    </LangState>
  </React.StrictMode>
  </RestoServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
