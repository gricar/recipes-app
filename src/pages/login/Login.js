import React from 'react';
import './Login.css';

function Login() {
  return (
    <form>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        placeholder="Digite sua senha"
      />
      <button
        data-testid="login-submit-btn"
        type="button"
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
