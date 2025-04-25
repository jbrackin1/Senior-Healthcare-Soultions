import { render, screen } from '@testing-library/react';
import MarketPlacePage from './pages/Insurance/MarketplaceAPIPage/MarketPlacePage' // Adjust path as needed
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

test('renders MarketPlacePage without crashing', () => {
  render(
    <MemoryRouter>
      <MarketPlacePage />
    </MemoryRouter>
  );

  // Check if specific content is rendered (e.g., a title or form input)
  expect(screen.getByText(/Customize Your Preferences/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Household Income/i)).toBeInTheDocument();
});