import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Generic/HomePage'; // Example import
import MarketPlacePage from './pages/Insurance/MarketplaceAPIPage/MarketPlacePage'; // Example import
import About from './pages/Generic/About'; // Example import
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider

// Define a simple theme for testing purposes
const mockTheme = {
  colors: {
    backgroundAlt: '#f0f0f0', // Mock value for backgroundAlt
    text: '#333', // Mock value for text color
    accent: '#ff6347', // Mock value for accent color
  },
};

test('renders HomePage, MarketPlacePage, and About page correctly', async () => {
  render(
    <MemoryRouter initialEntries={['/', '/marketplace', '/about']}>
      <ThemeProvider theme={mockTheme}> {/* Wrap the components with the ThemeProvider */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketPlacePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

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
  
    expect(screen.getByText(/Find the best insurance plans tailored to your needs./i)).toBeInTheDocument();
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
  
    expect(screen.queryByText(/MarketPlacePage/i)).toBeInTheDocument();
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
  
    expect(screen.queryByText(/About Us/i)).toBeInTheDocument();
  });
});