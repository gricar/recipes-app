import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { filters } from './mocks/mainFoods';
import App from '../App';

describe('Teste o componente <MainFoods />', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
  });
  it('Será validado se a página possui o Header "Foods" com icon Profle e Search', () => {
    const headerTitle = screen.getByRole('heading', { name: 'Foods', level: 3 });
    const iconProfile = screen.getByRole('img', { name: /profileIcon/i });
    const iconSearch = screen.getByRole('img', { name: /searchIcon/i });

    expect(headerTitle && iconProfile && iconSearch).toBeInTheDocument();
  });
  it('Será validado se a página possui os botões de filtro', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(filters),
    });

    const filterButton = screen.queryByRole('button', { name: /beef/i });
    expect(filterButton).toBeInTheDocument();
  });
  // it('', () => {});
  // it('', () => {});
  // it('', () => {});
  // it('', () => {});

  // it('Será validado se é redrecionado para "/profile" ao clicar no icon profile', () => {
  //   const { history } = renderWithRouter(<App />);
  //   history.push('/foods');

  //   const iconProfile = screen.getByRole('img', { name: /profileIcon/i });
  //   userEvent.click(iconProfile);
  //   expect(history.location.pathname).toBe('/profile');
  // });
  // it('Será validado se as opções de pesquisa aparecem ao clicar no icon Search', () => {
  //   const { history } = renderWithRouter(<App />);
  //   history.push('/foods');

  //   const iconSearch = screen.getByRole('img', { name: /searchIcon/i });
  //   userEvent.click(iconSearch);

  //   const searchInput = screen.getByPlaceholderText(/search recipe/i);
  //   const radioOne = screen.getByRole('radio', { name: /ingredient/i });
  //   const radioTwo = screen.getByRole('radio', { name: /name/i });
  //   const radioThree = screen.getByRole('radio', { name: /first letter/i });
  //   expect(searchInput && radioOne && radioTwo && radioThree).toBeInTheDocument();
  // });
});
