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
    </Switch>
    <Footer/>
    </Router>
    
  );
}

export default App;
