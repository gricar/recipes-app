// Feito por Tabata;
import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import CardFoods from '../../components/cardfood/CardFoods';
import ButtonCategoryFood from '../../components/cardfood/ButtonCategoryFood';
import './MainFoods.css';

function MainFoods() {
  return (
    <section>
      <Header title="Foods" />
      <ButtonCategoryFood />
      <CardFoods quant={ 12 } dataIdText="-recipe-card" />
      <BottonMenu />
    </section>
  );
}

export default MainFoods;
