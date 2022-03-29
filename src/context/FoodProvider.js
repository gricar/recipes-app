import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FoodContext from './FoodContext';
import fetchFood from '../services/fetchFood';

// STCOSTA
function FoodProvider({ children }) {
  const [foodListByIngre, setFoodListByIngre] = useState({ meals: [] });
  const [foodListByName, setFoodListByName] = useState({ meals: [] });
  const [foodListByFirstLetter, setFoodListByFirstLetter] = useState({ meals: [] });
  const [foodListError, setFoodListError] = useState({ meals: [] });

  const getfoodList = (searchType, searchFood) => {
    fetchFood(searchType, searchFood)
      .then((response) => {
        if (searchType === 'Ingredient') {
          setFoodListByIngre(response);
        } else if (searchType === 'Name') {
          setFoodListByName(response);
        } else {
          setFoodListError(response);
        }
      })
      .catch((error) => {
        setPlanetListError({ meals: error });
      });
  };

  return (
    <FoodContext.Provider
      value={ {
        foodListByIngre,
        setFoodListByIngre,
        foodListByName,
        setFoodListByName,
        foodListByFirstLetter,
        setFoodListByFirstLetter,
        getfoodList,
        foodListError,
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
