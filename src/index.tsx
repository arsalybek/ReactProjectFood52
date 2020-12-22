import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import App from './App';
import LangState from './components/context/Lang';
import './index.css';
import { recipeCategoryList } from './models/RecipeCategory';
import { shopList } from './models/Shop';
import { AppAction, AppState } from './store/actionTypes';
import rootReducer from './store/reducer';
// const history = createBrowserHistory();
// const initialState: any = {};
// const store = configureStore(history, initialState);

const logger = createLogger({});
const store = createStore<AppState, AppAction, unknown, unknown>(
  rootReducer as any,
  {
    allRecipes: shopList,
    likedRecipes: [],
    foodCategories: recipeCategoryList,
    lang: "gggg"
  },
  applyMiddleware(logger),
);

// ReactDOM.render(
//   <React.StrictMode>
    
//     <App store={store}/>
//     </LangState>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
    <LangState>
    <App/>
    </LangState>
  </Provider>,
  document.getElementById('root'),
);
