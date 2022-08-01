import { render, screen } from '@testing-library/react';
import Sell from './Sell';

test('renders learn react link', () => {
  render(<Sell />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
