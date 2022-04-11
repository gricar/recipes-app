// Feito por Tabata;
// Suéli - alteração quant e dataIdText dinâmico.
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinksContext from '../../context/DrinksContext';

function CardDrinks({ quant, dataIdText }) {
  const QTD_RECIPES = quant;
  const { drinks, drinksByCategory } = useContext(DrinksContext);

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
          to={ `/drinks/${idDrink}` }
        >
          <div
            className="card"
            data-testid={ `${index}${dataIdText}` }
          >
            <img
              src={ strDrinkThumb }
              alt={ `receita de${strDrink}` }
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

CardDrinks.propTypes = {
  quant: PropTypes.number.isRequired,
  dataIdText: PropTypes.string.isRequired,
};

export default CardDrinks;
