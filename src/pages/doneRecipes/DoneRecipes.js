import React, { Component } from 'react';
import Header from '../../components/header/Header';

class DoneRecipes extends Component {
  render() {
    return (
      <div>
        <Header title="Done Recipes" searchBtn={ false } />
        <p>oi do DoneRecipes temporário</p>
      </div>
    );
  }
}

export default DoneRecipes;
