import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter from '../CurrencyConverter';
import '@testing-library/jest-dom/extend-expect';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrencyConverter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//TODO add tests