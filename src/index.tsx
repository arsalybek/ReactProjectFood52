import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LangState from './components/context/Lang';
import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
const history = createBrowserHistory();
const initialState: any = {};
const store = configureStore(history, initialState);

ReactDOM.render(
  <React.StrictMode>
    <LangState>
    <App store={store} history={history} />
    </LangState>
  </React.StrictMode>,
  document.getElementById('root')
);
