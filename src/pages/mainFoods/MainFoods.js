// Feito por Tabata;
import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import FoodMainProvider from '../../context/FoodMainProvider';
import CardFoods from '../../components/cardfood/CardFoods';
import ButtonCategoryFood from '../../components/cardfood/ButtonCategoryFood';
import './MainFoods.css';

function MainFoods() {
  return (
    <section>
      <Header title="Foods" />
      <FoodMainProvider>
        <ButtonCategoryFood />
        <CardFoods />
      </FoodMainProvider>
      <BottonMenu />
    </section>
  );
}

export default MainFoods;
