import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FoodProvider from './context/FoodProvider';
import DrinksProvider from './context/DrinksProvider';

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <DrinksProvider>
        <App />
      </DrinksProvider>
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
