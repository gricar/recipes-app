import React, { useEffect, useContext } from 'react';
import FoodContext from '../../context/FoodContext';

function MainFoods() {
  const {
    getfoodList,
    // foodListByName,
    // foodListByIngre,
    foodListByFirstLetter,
  } = useContext(FoodContext);

  useEffect(() => {
    getfoodList('FirstLetter', 'B');
  }, []);

  return (
    <main>
      {
        foodListByFirstLetter.meals.length !== 0
          && (
            foodListByFirstLetter.meals.forEach((mealElem) => { console.log(mealElem); })
          )
      }
    </main>
  );
}

export default MainFoods;
