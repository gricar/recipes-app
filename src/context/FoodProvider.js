import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FoodContext from './FoodContext';
import { fetchFood } from '../services/fetchFood';

function FoodProvider({ children }) {
  const [foodListByCategory, setFoodListByCategory] = useState({ meals: [] });
  const [foodListByNatio, setFoodListByNatio] = useState({ meals: [] });
  const [foodListByIngre, setFoodListByIngre] = useState({ meals: [] });
  
  const getfoodList = (searchType, itemSearch) => {
    fetchFood(searchType, itemSearch)
      .then((response) => {
        if (searchType === 'c=') {
          setFoodListByCategory(response);
        } else if(searchType === 'a=') {
          setFoodListByNatio(response);
        }
        else {
          setFoodListByIngre(response);
        }        
      })
      .catch((error) => {
        setPlanetListError({ error, });
      });
  };

  return (
    <FoodContext.Provider
      value={ {
        foodListByCategory,
        setFoodListByCategory,
        foodListByNatio,
        setFoodListByNatio,
        foodListByIngre,
        setFoodListByIngre,
        getfoodList,        
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
