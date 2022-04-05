// Feito por Tabata: formulário para inserção de e-mail e senha, mais validação dos campos preenchidos para habilidar o botão "enter"
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { setStorage } from '../../services/SetAndGetStorage';
import './Login.css';

function Login({ history }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const { email, password } = user;
    const emailValidation = (/\S+@\S+\.\S+/).test(email);
    const LENGTH_PASSWORD = 6;
    if (emailValidation && password.length > LENGTH_PASSWORD) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [user]);

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setStorage('mealsToken', 1);
    setStorage('cocktailsToken', 1);
    setStorage('user', { email: user.email });
    history.push('/foods');
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/foods" />;
  }
  return (
    <section className="container-login">
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ user.email }
          placeholder="Digite seu e-mail"
          onChange={ handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={ user.password }
          onChange={ handleChange }
        />
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </section>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
