// Feito por Tabata;
import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import CardDrinks from '../../components/carddrinks/CardDrinks';
import ButtonCategoryDrink from '../../components/carddrinks/ButtonCategoryDrink';

function MainDrinks() {
  return (
    <section>
      <Header title="Drinks" />
      <ButtonCategoryDrink />
      <CardDrinks quant={ 12 } dataIdText="-recipe-card" />
      <BottonMenu />
    </section>
  );
}

export default MainDrinks;
