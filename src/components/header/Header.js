import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchInputBar from '../searchBar/SearchInputBar';
import FoodContext from '../../context/FoodContext';
import DrinksContext from '../../context/DrinksContext';
import './header.css';

function Header({ title, searchBtn = true }) {
  const {
    foodListByIngre, foodListByName, foodListByFirstLetter, setRecipesByCategory,
  } = useContext(FoodContext);

  const {
    drinksListByIngre, drinksListByName, drinksListByFirstLetter, setDrinksByCategory,
  } = useContext(DrinksContext);

  const [hasSearchInput, setHasSearchInput] = useState(false);

  const history = useHistory();
  const ALERT_NOT_FOUND = 'Sorry, we haven\'t found any recipes for these filters.';

  // requisito 16 - foodByIngre
  useEffect(() => {
    if (!foodListByIngre.meals) { // requisito 18
      return global.alert(ALERT_NOT_FOUND);
    }
    if (foodListByIngre.meals.length === 1) {
      history.push(`/foods/${foodListByIngre.meals[0].idMeal}`);
    }
    if (foodListByIngre.meals.length > 1) {
      setRecipesByCategory(foodListByIngre.meals);
    }
  }, [foodListByIngre, history, setRecipesByCategory]);

  // requisito 16 - foodByName
  useEffect(() => {
    if (!foodListByName.meals) { // requisito 18
      return global.alert(ALERT_NOT_FOUND);
    }
    if (foodListByName.meals.length === 1) {
      history.push(`/foods/${foodListByName.meals[0].idMeal}`);
    }
    if (foodListByName.meals.length > 1) {
      setRecipesByCategory(foodListByName.meals);
    }
  }, [foodListByName, history, setRecipesByCategory]);

  // requisito 16 - foodByFirstLetter
  useEffect(() => {
    if (!foodListByFirstLetter.meals) { // requisito 18
      return global.alert(ALERT_NOT_FOUND);
    }
    if (foodListByFirstLetter.meals.length === 1) {
      history.push(`/foods/${foodListByFirstLetter.meals[0].idMeal}`);
    }
    if (foodListByFirstLetter.meals.length > 1) {
      setRecipesByCategory(foodListByFirstLetter.meals);
    }
  }, [foodListByFirstLetter, history, setRecipesByCategory]);

  // requisito 16 - drinkByIngre
  useEffect(() => {
    if (!drinksListByIngre.drinks) { // requisito 18
      return global.alert(ALERT_NOT_FOUND);
    }
    if (drinksListByIngre.drinks.length === 1) {
      history.push(`/drinks/${drinksListByIngre.drinks[0].idDrink}`);
    }
    if (drinksListByIngre.drinks.length > 1) {
      setDrinksByCategory(drinksListByIngre.drinks);
    }
  }, [drinksListByIngre, history, setDrinksByCategory]);

  // requisito 16 - drinkByName
  useEffect(() => {
    if (!drinksListByName.drinks) { // requisito 18
      return global.alert(ALERT_NOT_FOUND);
    }
    if (drinksListByName.drinks.length === 1) {
      history.push(`/drinks/${drinksListByName.drinks[0].idDrink}`);
    }
    if (drinksListByName.drinks.length > 1) {
      setDrinksByCategory(drinksListByName.drinks);
    }
  }, [drinksListByName, history, setDrinksByCategory]);

  // requisito 16 - drinkByFirstLetter
  useEffect(() => {
    if (!drinksListByFirstLetter.drinks) { // requisito 18
      return global.alert(ALERT_NOT_FOUND);
    }
    if (drinksListByFirstLetter.drinks.length === 1) {
      history.push(`/drinks/${drinksListByFirstLetter.drinks[0].idDrink}`);
    }
    if (drinksListByFirstLetter.drinks.length > 1) {
      setDrinksByCategory(drinksListByFirstLetter.drinks);
    }
  }, [drinksListByFirstLetter, history, setDrinksByCategory]);

  return (
    <div className="header-container">
      <header className="header">
        <Link to="/profile" data-testid="profile-top-btn" src={ profileIcon }>
          <img
            src={ profileIcon }
            alt="profileIcon"
          />
        </Link>
        <h3 data-testid="page-title">{title}</h3>
        {
          searchBtn && (
            <button
              type="button"
              data-testid="search-top-btn"
              className="searchIcon"
              src={ searchIcon }
              onClick={ () => setHasSearchInput(!hasSearchInput) }
            >
              <img
                src={ searchIcon }
                alt="searchIcon"
              />
            </button>
          )
        }
      </header>
      {
        hasSearchInput && <SearchInputBar title={ title } />
      }
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBtn: PropTypes.bool,
};

Header.defaultProps = {
  searchBtn: true,
};
