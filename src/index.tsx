import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import allReducers from "./reducers";


// import store from './store'
import LangState from './components/context/Lang';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import ErrorBoundary from './components/error-boundary/error-boundary';


// const restoService = new RestoService()
const store = createStore(
  allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    
  <React.StrictMode>
    <ErrorBoundary>
    <LangState>
      <Router>
        <App/>
    </Router>
    </LangState>
    </ErrorBoundary>
  </React.StrictMode>,
  
  </Provider>,
  
  document.getElementById('root')
);
