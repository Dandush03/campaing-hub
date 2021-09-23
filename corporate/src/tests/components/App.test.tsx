import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import storeConfig from '../../store';

const store = storeConfig();
const Wrapper = () =>
  <Provider store={store}>
    <App />
  </Provider>;

test('renders learn react link', () => {
  render(<Wrapper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
