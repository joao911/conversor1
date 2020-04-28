import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
