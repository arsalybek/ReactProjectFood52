import React from 'react';
import './App.css';
import FoodCategory from './components/recipeCategory/RecipeCategory';
import Navbar from './components/navbar/Navbar';
import { recipeCategoryList } from './models/RecipeCategory';
import { User, users } from "./models/User";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PastaRecipesList from './components/categoryRecipeList/PastaRecipesList';
import SaladRecipesList from './components/categoryRecipeList/SaladRecipesList';
import ChickenRecipesList from './components/categoryRecipeList/ChickenRecipesList';
import Login from './components/auth/Login';





function App() {
  return (
    <Router>
      <Switch>
        <Route path="/recipes">
        <Navbar users={users}/>
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
        <Route path="/login">
          <Login users= {users}/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
