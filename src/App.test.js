import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Generic/HomePage';
import MarketPlacePage from './pages/Insurance/MarketplaceAPIPage/MarketPlacePage';
import About from './pages/Generic/About';
import { ThemeProvider } from 'styled-components';

const mockTheme = {
  colors: {
    backgroundAlt: '#f0f0f0',
    text: '#333',
    accent: '#ff6347',
  },
};

test('renders HomePage correctly', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={mockTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Find the best insurance plans tailored to your needs./i)
  ).toBeInTheDocument();
});

test('renders MarketPlacePage correctly', () => {
  render(
    <MemoryRouter initialEntries={['/marketplace']}>
      <ThemeProvider theme={mockTheme}>
        <Routes>
          <Route path="/marketplace" element={<MarketPlacePage />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

  expect(screen.queryByText(/Compare Insurance Plans/i)).toBeInTheDocument();
});

test('renders About page correctly', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <ThemeProvider theme={mockTheme}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

  expect(screen.queryByText(/Our Credibility/i)).toBeInTheDocument();
});