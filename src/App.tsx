import { History } from "history";
import React, { lazy, Profiler, Suspense, useContext, useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Dispatch, Store } from "redux";
import './App.css';
import Login from "./components/auth/Login";
import SaladRecipesList from "./components/categoryRecipeList/SaladRecipesList";
// import Login from './components/auth/Login';
import { LangContext } from './components/context/Lang';
import Footer from './components/footer/Footer';
import Header from './components/navbar/Header';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import Cart from "./components/recipeCategory/Cart";
import Shop from "./components/shop/shop";
// import Shop from "./components/shop/shop";
import { recipeCategoryList, RecipeCategoryModel } from './models/RecipeCategory';
import { shopList } from "./models/Shop";
import { users } from "./models/User";
import { getFoodCategoryList } from "./store/actionCreators";

// lazy loading
const MainPage = lazy(() => import('./components/main-page/MainPage'))
const RecipeCategory = lazy(() => import('./components/recipeCategory/RecipeCategory'))
const PastaRecipesList = lazy(() => import('./components/categoryRecipeList/PastaRecipesList'))
// const SaladRecipesList = lazy(() => import('./components/categoryRecipeList/SaladRecipesList'))
const ChickenRecipesList = lazy(() => import('./components/categoryRecipeList/ChickenRecipesList'))

// interface MainProps {
//   store: Store<State>;
//   history: History;
// }

interface propsFromState {
  foodCategories: RecipeCategoryModel[];
}

interface propsFromDispatch {
	getFoodCategoryList: () => any;
  }

// type AllProps = MainProps & propsFromState & propsFromDispatch;

function App() {
  const { dispatch: { translate } } = useContext(LangContext);
  useEffect(() => {
	  getFoodCategoryList()
  }, []);

  const callBackFunction = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Set<{ id: number; name: string; timestamp: number }>
  ) => {
    console.log("ID", id);
    console.log("Phase", phase);
    console.log("Actual Duration", actualDuration);
    console.log("Base Duration", baseDuration);
    console.log("Start time", startTime);
    console.log("Commit Time", commitTime);
  };
  return (
    <Router>
      <Suspense fallback={<p>Загружается</p>}>
        <Header fixed transparent />
        <Switch>
          <Route path="/recipes" exact>
            <RecipeCategory foodCategoryList={recipeCategoryList} />
          </Route>
          <Route path="/pasta" exact>
            <Profiler id="PastaRecipeList" onRender={callBackFunction}>
              <PastaRecipesList />
            </Profiler>
          </Route>
          <Route path="/salad" exact>
            <SaladRecipesList />
          </Route>
          <Route path="/chicken" exact>
            <ChickenRecipesList />
          </Route>
          <Route path="/details/:id" exact>
            <RecipeDetails />
          </Route>
          <Route path="/login" exact>
            <Login users={users} />
          </Route>
          <Route path="/shop" exact>
            <Shop shopList={shopList} />
          </Route>
          <Route path="/home" exact>
            <MainPage />
          </Route>
          <Route path="/favourites" exact>
            <Cart />
          </Route>
          <Redirect from='/' to='/home'/>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}
// const mapStateToProps = ({ foodCategories }: State) => ({
//   foodCategories,
// });

const mapDispatchProps = (dispatch: Dispatch) => {
  return {
    getFoodCategoryList: () => {
      dispatch(getFoodCategoryList());
    },
  };
};

export default (App);
