import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

function goToRecipeInProgress(recipeid) {
  const { history } = renderWithRouter(<App />);

  history.push(`/foods/${recipeid}/in-progress`);
}

describe(`47 - Tela deve conter: uma imagem da receita, seu titulo,
sua categoria (ou se a bebida é alcoólica ou não),
 uma lista de ingredientes com suas respectivas quantidades e suas instruções`, () => {
  it('blah blah',
    () => {
      const recipe52912 = 52912;
      goToRecipeInProgress(recipe52912);

      const thumbnail = screen.getByAltText('Three-cheese souffles');
      const title = screen.getByRole('heading', { name: 'Three-cheese souffles' });

      expect(thumbnail).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
});
