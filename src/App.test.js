import { render, screen } from '@testing-library/react';
import MarketPlacePage from './pages/Insurance/MarketplaceAPIPage/MarketPlacePage' // Adjust path as needed
import { MemoryRouter } from 'react-router-dom';

test('renders form inputs and title', () => {
  render(
    <MemoryRouter>
      <MarketPlacePage />
    </MemoryRouter>
  );

  expect(screen.getByText(/Customize Your Preferences/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Household Income/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
});
