import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import shareIcon from '../../images/shareIcon.svg';
import { getStorage } from '../../services/SetAndGetStorage';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [doneRecipesFilter, setDoneRecipesFilter] = useState([]);
  const [copyUrl, setCopyUrl] = useState('');

  useEffect(() => {
    setDoneRecipes(getStorage('doneRecipes'));
  }, [copyUrl]);

  const handleClick = (name, type, id) => {
    if (type === 'food') {
      navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
      setCopyUrl(name);
    }
    if (type === 'drink') {
      navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
      setCopyUrl(name);
    }
  };

  const doneRecipesList = () => {
    if (doneRecipesFilter.length) {
      return doneRecipesFilter;
    }
    return doneRecipes;
  };

  const handleFilter = ({ target: { name } }) => {
    if (name === 'food') {
      setDoneRecipesFilter(doneRecipes.filter(({ type }) => type === 'food'));
    }
    if (name === 'drink') {
      setDoneRecipesFilter(doneRecipes.filter(({ type }) => type === 'drink'));
    }
  };

  return (
    <section>
      <Header title="Done Recipes" searchBtn={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setDoneRecipesFilter([]) }
      >
        All
      </button>
      <button
        name="food"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ handleFilter }
      >
        Food
      </button>
      <button
        name="drink"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ handleFilter }
      >
        Drinks
      </button>
      {
        doneRecipesList()
        && doneRecipesList().map(({
          id,
          type,
          category,
          name,
          image,
          doneDate,
          nationality,
          tags,
          alcoholicOrNot,
        }, index) => {
          if (type === 'food') {
            return (
              <div key={ id }>
                <div>
                  <Link
                    to={ `/foods/${id}` }
                  >
                    <img
                      src={ image }
                      alt={ `Receita${name}` }
                      data-testid={ `${index}-horizontal-image` }
                      width="100"
                    />
                  </Link>
                </div>
                <Link
                  to={ `/foods/${id}` }
                >
                  <p
                    data-testid={ `${index}-horizontal-name` }
                  >
                    { name }
                  </p>
                </Link>
                <h3
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { `${nationality} - ${category}` }
                </h3>
                <p
                  data-testid={ `${index}-horizontal-done-date` }
                >
                  { doneDate }
                </p>
                { tags.slice(0, 2)
                  .map((tag) => (
                    <p
                      key={ tag }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      { tag }
                    </p>)) }
                <button
                  name={ name }
                  type="button"
                  data-testid={ `${index}-horizontal-share-btn` }
                  src="shareIcon"
                  onClick={ () => handleClick(name, type, id) }
                >
                  {
                    copyUrl === name
                      ? <p>Link copied!</p>
                      : <img src={ shareIcon } alt="compartilhar receita" />
                  }
                </button>
              </div>
            );
          }
          return (
            <div key={ id }>
              <div>
                <Link
                  to={ `/drinks/${id}` }
                >
                  <img
                    src={ image }
                    alt={ `Receita${name}` }
                    data-testid={ `${index}-horizontal-image` }
                    width="100"
                  />
                </Link>
              </div>
              <Link
                to={ `/drinks/${id}` }
              >
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  { name }
                </p>
              </Link>
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                { `${nationality}${alcoholicOrNot}` }
              </h3>
              <p
                data-testid={ `${index}-horizontal-done-date` }
              >
                { doneDate }
              </p>
              <button
                name={ name }
                type="button"
                data-testid={ `${index}-horizontal-share-btn` }
                src="shareIcon"
                onClick={ () => handleClick(name, type, id) }
              >
                {
                  copyUrl === name
                    ? <p>Link copied!</p>
                    : <img src={ shareIcon } alt="compartilhar receita" />
                }
              </button>
            </div>
          );
        })
      }
    </section>
  );
}

export default DoneRecipes;
