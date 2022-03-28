// Feito por Tabata: formulário para inserção de e-mail e senha, mais validação dos campos preenchidos para habilidar o botão "enter"
import React, { useEffect, useState } from 'react';
import './Login.css';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

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

  return (
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
<<<<<< main-group-18-requisito-05
        disabled={ isDisabled }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
