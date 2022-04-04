import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import {
  fetchFoodMain,
  fetchFoodListNationalities,
  fetchFoodFilterByNationality,
} from '../../services/fetchFoodAndDrinkMain';

const QTD_RECIPES = 12;

function ExploreFoodsByNationalities() {
  const [nationalityList, setNationalityList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const noFilter = await fetchFoodMain();
      setRecipes(noFilter.meals);
      const listNat = await fetchFoodListNationalities();
      setNationalityList(listNat);
    })();
  }, []);

  const handleChange = async ({ target: { value } }) => {
    if (value !== 'All') {
      console.log('caiu no if: ', value);
      const recipesByNat = await fetchFoodFilterByNationality(value);
      setRecipes(recipesByNat);
    } else {
      console.log('ativou foodMain: ', value);
      const noFilter = await fetchFoodMain();
      setRecipes(noFilter.meals);
    }
  };

  return (
    <div>
      <Header title="Explore Nationalities" />
      <form>
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ handleChange }
        >
          <option
            data-testid="All-option"
          >
            All
          </option>
          { nationalityList && nationalityList.map((element) => {
            const nation = Object.values(element);
            return (
              <option
                key={ nation }
                data-testid={ `${nation}-option` }
              >
                { nation }
              </option>
            );
          }) }
        </select>
      </form>

      {
        recipes && recipes
          .slice(0, QTD_RECIPES).map(({
            strMeal,
            strMealThumb,
            idMeal,
          }, index) => (
            <Link
              key={ idMeal }
              style={ { textDecoration: 'none', color: 'black' } }
              to={ `/foods/${idMeal}` }
            >
              <div
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ strMealThumb }
                  alt={ `receita de${strMeal}` }
                  width="100"
                  data-testid={ `${index}-card-img` }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  { strMeal }
                </p>
              </div>
            </Link>
          ))
      }

      <BottonMenu />
    </div>
  );
}

export default ExploreFoodsByNationalities;
