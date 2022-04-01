import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import {
  fetchFoodListNationalities,
  fetchFoodFilterByNationality,
  fetchFoodMain,
} from '../../services/fetchFoodAndDrinkMain';

const QTD_RECIPES = 12;

function ExploreFoodsByNationalities() {
  const [nacionality, setNacionality] = useState('American');
  const [nacionalityList, setNacionalityList] = useState([]);
  const [recipesNationalityList, setRecipesNationalityList] = useState([]);
  const [recipesNoFilter, setRecipesNoFilter] = useState([]);

  useEffect(() => {
    (async () => {
      setNacionalityList(await fetchFoodListNationalities());
      setRecipesNationalityList(await fetchFoodFilterByNationality(nacionality));
      setRecipesNoFilter(await fetchFoodMain());
    })();
  }, [nacionality]);

  const recipes = nacionality === 'All' ? recipesNoFilter.meals : recipesNationalityList;

  return (
    <div>
      <Header title="Explore Nationalities" />

      <form>
        <select
          data-testid="explore-by-nationality-dropdown"
          value={ nacionality }
          onChange={ ({ target: { value } }) => setNacionality(value) }
        >
          <option
            data-testid="All-option"
          >
            All
          </option>
          {
            nacionalityList.length
              && nacionalityList.map((el) => {
                const nation = Object.values(el);
                return (
                  <option
                    key={ nation }
                    data-testid={ `${nation}-option` }
                  >
                    { nation }
                  </option>
                );
              })
          }
        </select>
      </form>

      {
        recipes.length && recipes
          .slice(0, QTD_RECIPES)
          .map(({
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
