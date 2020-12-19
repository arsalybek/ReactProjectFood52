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
import ErrorBoundary from './components/error-boundary/error-boundary';


const restoService = new RestoService()
ReactDOM.render(
  <Provider store={store}>
    <RestoServiceContext.Provider value = {restoService}>
  <React.StrictMode>
    <ErrorBoundary>
    <LangState>
      <Router>
        <App/>
    </Router>
    </LangState>
    </ErrorBoundary>
  </React.StrictMode>
  </RestoServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
