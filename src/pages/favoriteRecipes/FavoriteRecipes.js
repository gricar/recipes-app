// Feito por Tabata;
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import shareIconBlue from '../../images/shareIconBlue.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import backIcon from '../../images/back-icon.png';
import { getStorage, setStorage } from '../../services/SetAndGetStorage';
import './FavoriteRecipes.css';

function FavoriteRecipes() {
  const history = useHistory();
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
    <section className="favorites">
      <div className="header-favorites">
        <Header title="Done Recipes" searchBtn={ false } />
      </div>
      <button
        className="button-back-icon"
        type="button"
        onClick={ () => history.push('/profile') }
      >
        <img
          className="back-icon-fav"
          src={ backIcon }
          alt="retornar para página de explorar"
        />
      </button>
      <nav className="buttons-filter">
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
      </nav>
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
              <div key={ id } className="food-drink-favorite">
                <div>
                  <Link
                    to={ `/foods/${id}` }
                  >
                    <img
                      src={ image }
                      alt={ `Receita${name}` }
                      data-testid={ `${index}-horizontal-image` }
                      width="100"
                      className="favorite-picture"
                    />
                  </Link>
                </div>
                <div className="buttons-share-fav">
                  <button
                    name={ name }
                    type="button"
                    data-testid={ `${index}-horizontal-share-btn` }
                    src="shareIconBlue"
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
                    src="blackHeartIcon"
                    onClick={ () => handleDisfavorRecipe(id) }
                  >
                    <img src={ blackHeartIcon } alt="compartilhar receita" />
                  </button>
                </div>
                <Link
                  to={ `/foods/${id}` }
                  className="title-favorites"
                >
                  <p
                    data-testid={ `${index}-horizontal-name` }
                    className="title-favorites"
                  >
                    { name }
                  </p>
                </Link>
                <h3
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { `${nationality} - ${category}` }
                </h3>
              </div>
            );
          }
          return (
            <div key={ id } className="food-drink-favorite">
              <div>
                <Link
                  to={ `/drinks/${id}` }
                >
                  <img
                    className="favorite-picture"
                    src={ image }
                    alt={ `Receita${name}` }
                    data-testid={ `${index}-horizontal-image` }
                    width="100"
                  />
                </Link>
              </div>
              <div className="buttons-share-fav">
                <button
                  name={ name }
                  type="button"
                  data-testid={ `${index}-horizontal-share-btn` }
                  src="shareIconBlue"
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
                  src="blackHeartIcon"
                  onClick={ () => handleDisfavorRecipe(id) }
                >
                  <img src={ blackHeartIcon } alt="compartilhar receita" />
                </button>
              </div>
              <Link
                to={ `/drinks/${id}` }
                className="title-favorites"
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
            </div>
          );
        })
      }
    </section>
  );
}

export default FavoriteRecipes;
