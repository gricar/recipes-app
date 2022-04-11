// Feito por Tabata;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import shareIconBlue from '../../images/shareIconBlue.svg';
import addFavoriteIcon from '../../images/addFavoriteIcon.svg';
import { getStorage, setStorage } from '../../services/SetAndGetStorage';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [favoritesRecipesFilter, setFavoritesRecipesFilter] = useState([]);
  const [copyUrl, setCopyUrl] = useState('');

  useEffect(() => {
    setFavoriteRecipes(getStorage('favoriteRecipes'));
  }, []);

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

  const handleDisfavorRecipe = (id) => {
    const disfavor = favoriteRecipes
      .filter(({ id: idDisfavor }) => idDisfavor !== id);
    setFavoriteRecipes(disfavor);
    setStorage('favoriteRecipes', disfavor);
  };

  const filterFavoriteRecipes = () => {
    if (favoritesRecipesFilter.length) {
      return favoritesRecipesFilter;
    }
    return favoriteRecipes;
  };

  const handleFilter = ({ target: { name } }) => {
    if (name === 'food') {
      setFavoritesRecipesFilter(favoriteRecipes.filter(({ type }) => type === 'food'));
    }
    if (name === 'drink') {
      setFavoritesRecipesFilter(favoriteRecipes.filter(({ type }) => type === 'drink'));
    }
  };

  return (
    <section>
      <Header title="Done Recipes" searchBtn={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFavoritesRecipesFilter([]) }
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
        filterFavoriteRecipes()
        && filterFavoriteRecipes().map(({
          alcoholicOrNot,
          category,
          id,
          image,
          name,
          nationality,
          type,
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
                      : <img src={ shareIconBlue } alt="compartilhar receita" />
                  }
                </button>
                <button
                  name={ name }
                  type="button"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src="addFavoriteIcon"
                  onClick={ () => handleDisfavorRecipe(id) }
                >
                  <img src={ addFavoriteIcon } alt="compartilhar receita" />
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
              <button
                name={ name }
                type="button"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src="addFavoriteIcon"
                onClick={ () => handleDisfavorRecipe(id) }
              >
                <img src={ addFavoriteIcon } alt="compartilhar receita" />
              </button>
            </div>
          );
        })
      }
    </section>
  );
}

export default FavoriteRecipes;
