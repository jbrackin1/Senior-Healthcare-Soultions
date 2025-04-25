import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Generic/HomePage'; // Example import
import MarketPlacePage from './pages/Insurance/MarketplaceAPIPage/MarketPlacePage'; // Example import
import About from './pages/Generic/About'; // Example import

test('renders HomePage, MarketPlacePage, and About page correctly', async () => {
  render(
    <MemoryRouter initialEntries={['/', '/marketplace', '/about']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketPlacePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );

  // HomePage route
  expect(screen.getByText(/Welcome to HomePage/i)).toBeInTheDocument();

  // Navigate to MarketPlacePage route
  expect(screen.queryByText(/MarketPlacePage/i)).toBeInTheDocument();

  // Navigate to About route
  expect(screen.queryByText(/About Us/i)).toBeInTheDocument();
});