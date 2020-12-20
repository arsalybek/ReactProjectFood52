import React, { useState,  useContext, useEffect } from 'react';
import './App.css';
import FoodCategory from './components/recipeCategory/RecipeCategory';
import Navbar from './components/navbar/Navbar';
import { recipeCategoryList } from './models/RecipeCategory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PastaRecipesList from './components/categoryRecipeList/PastaRecipesList';
import SaladRecipesList from './components/categoryRecipeList/SaladRecipesList';
import ChickenRecipesList from './components/categoryRecipeList/ChickenRecipesList';
import Footer from './components/footer/Footer';
import MainPage from './components/main-page/MainPage';
import { LangContext } from './components/context/Lang';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import { users } from "./models/User";
import Shop from './components/shop/shop';
import { shopList } from './models/Shop';
import Login from './components/auth/Login';
import MenuList from './components/menu-list';
import MenuListItem from './components/menu-list-item';
import ErrorBoundary from './components/error-boundary/error-boundary'


function App() {
  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <Router>
      {/* {state.map((item, idx) => <Navbar />)} */}
       <Navbar  />
      {/* <LangSwitch/> */}
      <Switch>
      <Route path="/home" exact>
        <MainPage/>
        </Route>
        <Route path="/recipes">
        <FoodCategory foodCategoryList = {recipeCategoryList} />  
        </Route>

        <Route path="/pasta">
          <PastaRecipesList/>
        </Route>

        <Route path="/salad">
          <SaladRecipesList />
        </Route>

        <Route path="/chicken">
          <ChickenRecipesList/>
        </Route>
        <Route path="/details/:id">
          <RecipeDetails/>
        </Route>
        <Route path="/login">
          <Login users= {users}/>
          </Route>
          <Route path="/shop">
          <Shop shopList={shopList}/>
        </Route>
        <Route path="/menu">
          <MenuList/>
        </Route>
        <ErrorBoundary>
          <Route path="/blog">

          </Route>
        </ErrorBoundary>
    </Switch>
    <Footer/>
    </Router>
    
  );
}

export default App;
