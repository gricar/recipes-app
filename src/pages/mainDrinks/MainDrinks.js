// Feito por Tabata;
import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import DrinksMainProvider from '../../context/DrinksMainProvider';
import CardDrinks from '../../components/carddrinks/CardDrinks';
import ButtonCategoryDrink from '../../components/carddrinks/ButtonCategoryDrink';

function MainDrinks() {
  return (
    <section>
      <Header title="Drinks" />
      <DrinksMainProvider>
        <ButtonCategoryDrink />
        <CardDrinks />
      </DrinksMainProvider>
      <BottonMenu />
    </section>
  );
}

export default MainDrinks;
