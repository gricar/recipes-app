import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const CORRECT_EMAIL = 'alguem@trybe.com';
const CORRECT_PASSWORD = '1234567';
const WRONG_EMAIL = 'alguem.com';
const WRONG_PASSWORD = '123456';
const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';

describe('Validação página de Login', () => {
  it('Será validade se o input de email/senha e o botão estão presentes', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const buttonEnter = screen.getByRole('button', { name: /enter/i });

    expect(inputEmail && inputPassword && buttonEnter).toBeInTheDocument();
    expect(inputEmail && inputPassword).toHaveValue('');
  });
  it('Será validado se o botão está desabilitado ao carregar a página', () => {
    renderWithRouter(<App />);
    const buttonEnter = screen.getByRole('button', { name: /enter/i });
    expect(buttonEnter).toBeDisabled();
  });
  it('Será validade se o botão é habilitado ao preencher os inputs corretamente', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const buttonEnter = screen.getByRole('button', { name: /enter/i });

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, CORRECT_PASSWORD);
    expect(inputEmail).toHaveValue(CORRECT_EMAIL);
    expect(inputPassword).toHaveValue(CORRECT_PASSWORD);
    expect(buttonEnter).toBeEnabled();

    userEvent.type(inputEmail, WRONG_EMAIL);
    userEvent.type(inputPassword, WRONG_PASSWORD);
    expect(inputEmail).toHaveValue(WRONG_EMAIL);
    expect(inputPassword).toHaveValue(WRONG_PASSWORD);
    expect(buttonEnter).toBeDisabled();

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, WRONG_PASSWORD);
    expect(inputEmail).toHaveValue(CORRECT_EMAIL);
    expect(inputPassword).toHaveValue(WRONG_PASSWORD);
    expect(buttonEnter).toBeDisabled();

    userEvent.type(inputEmail, WRONG_EMAIL);
    userEvent.type(inputPassword, CORRECT_PASSWORD);
    expect(inputEmail).toHaveValue(WRONG_EMAIL);
    expect(inputPassword).toHaveValue(CORRECT_PASSWORD);
    expect(buttonEnter).toBeDisabled();
  });
  it('Será validado se ao clicar no botão a página é redirecionada para "/foods"', () => {
    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const buttonEnter = screen.getByRole('button', { name: /enter/i });

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, CORRECT_PASSWORD);
    expect(buttonEnter).toBeEnabled();
    userEvent.click(buttonEnter);

    expect(history.location.pathname).toBe('/foods');
  });
});
