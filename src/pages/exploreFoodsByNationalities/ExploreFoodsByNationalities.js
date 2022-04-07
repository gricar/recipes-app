import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import {
  fetchFoodMain,
  fetchFoodListNationalities,
  fetchFoodFilterByNationality,
} from '../../services/fetchFoodAndDrinkMain';
import './ExploreByNationality.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const QTD_RECIPES = 12;

function ExploreFoodsByNationalities() {
  const [nationalityList, setNationalityList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const { meals } = await fetchFoodMain();
      setRecipes(meals);
      const listNat = await fetchFoodListNationalities();
      setNationalityList(listNat);
    })();
  }, []);

  const handleChange = async ({ target: { value } }) => {
    if (value !== 'All') {
      const recipesByNat = await fetchFoodFilterByNationality(value);
      setRecipes(recipesByNat);
    } else {
      const { meals } = await fetchFoodMain();
      setRecipes(meals);
    }
  };

  return (
    <section className="container-explore-nation">
      <Header title="Explore Nationalities" />
      <form>
        <select
          className="select-nation"
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

      <section>
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
                  className="card"
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
      </section>
      <BottonMenu />
    </section>
  );
}

export default ExploreFoodsByNationalities;
