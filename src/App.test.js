// App.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App'; // Make sure the path is correct

// Testing individual pages like MarketPlacePage and About
test('renders HomePage, MarketPlacePage, and About page correctly', async () => {
  render(
    <MemoryRouter initialEntries={['/', '/marketplace', '/about']}>
      <App />
    </MemoryRouter>
  );

  // HomePage route
  expect(screen.getByText(/Welcome to HomePage/i)).toBeInTheDocument();

  // Navigate to MarketPlacePage route
  expect(screen.queryByText(/MarketPlacePage/i)).toBeInTheDocument();

  // Navigate to About route
  expect(screen.queryByText(/About Us/i)).toBeInTheDocument();
});