import React, { Component } from 'react';
import Header from '../../components/header/Header';

class FavoriteRecipes extends Component {
  render() {
    return (
      <div>
        <Header title="Favorite Recipes" searchBtn={ false } />
        <p>oi do FavoriteRecipes temporário</p>
      </div>
    );
  }
}

export default FavoriteRecipes;
