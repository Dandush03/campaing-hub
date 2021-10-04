import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import storeConfig from '../../../store';
import Leads from '..';

// const store = storeConfig();
// const Wrapper = () =>
//   <Provider store={store}>
//     <Leads />
//   </Provider>;

// test('renders learn react link', () => {
//   render(<Wrapper />);
//   const linkElement = screen.getByText(/campaings/i);
//   expect(linkElement).toBeInTheDocument();
// });
