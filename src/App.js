import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import MainFoods from './pages/mainFoods/MainFoods';
import MainDrinks from './pages/mainDrinks/MainDrinks';
import FoodRecipeDetails from './pages/foodRecipeDetails/FoodRecipeDetails';
import DrinkRecipeDetails from './pages/drinkRecipeDetails/DrinkRecipeDetails';
import FoodRecipeInProgress from './pages/foodRecipeInProgress/FoodRecipeInProgress';
import DrinkRecipeInProgress from './pages/drinkRecipeInProgress/DrinkRecipeInProgress';
import Explore from './pages/explore/Explore';
import ExploreFoods from './pages/exploreFoods/ExploreFoods';
import ExploreDrinks from './pages/exploreDrinks/ExploreDrinks';
import ExploreFoodsByIngredients
from './pages/exploreFoodsByIngredients/ExploreFoodsByIngredients';
import ExploreDrinksByIngredients
from './pages/exploreDrinksByIngredients/ExploreDrinksByIngredients';
import ExploreFoodsByNationalities
from './pages/exploreFoodsByNationalities/ExploreFoodsByNationalities';
import Profile from './pages/profile/Profile';
import DoneRecipes from './pages/doneRecipes/DoneRecipes';
import FavoriteRecipes from './pages/favoriteRecipes/FavoriteRecipes';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div className="container-login">
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ MainFoods } />
          <Route exact path="/drinks" component={ MainDrinks } />
          <Route exact path="/foods/:recipeid" component={ FoodRecipeDetails } />
          <Route exact path="/drinks/:recipeid" component={ DrinkRecipeDetails } />
          <Route
            exact
            path="/foods/:recipeid/in-progress"
            component={ FoodRecipeInProgress }
          />
          <Route
            exact
            path="/drinks/:recipeid/in-progress"
            component={ DrinkRecipeInProgress }
          />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsByIngredients }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksByIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsByNationalities }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
