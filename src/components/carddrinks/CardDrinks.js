// Feito por Tabata;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinksMainContext from '../../context/DrinksMainContext';

const QTD_RECIPES = 12;

function CardDrinks() {
  const { drinks, drinksByCategory } = useContext(DrinksMainContext);

  const filteredDrinks = () => {
    if (drinksByCategory) {
      return drinksByCategory;
    }
    return drinks;
  };

  return (
    <section className="container-card">
      { filteredDrinks().slice(0, QTD_RECIPES).map(({
        idDrink,
        strDrinkThumb,
        strDrink,
      }, index) => (
        <Link
          key={ idDrink }
          style={ { textDecoration: 'none', color: 'black' } }
          to={ `/drinks/${idDrink}` }
        >
          <div
            className="card"
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ strDrinkThumb }
              alt={ `receita de${strDrink}` }
              width="100"
              data-testid={ `${index}-card-img` }
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              { strDrink }
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CardDrinks;
