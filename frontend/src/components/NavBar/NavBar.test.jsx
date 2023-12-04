import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavBar from './NavBar.jsx';

describe('navBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
  });

  it('renders Navigation Menu', () => {
    const headline = screen.getByText(/Contact/i);
    expect(headline).toBeInTheDocument();
  });

  it('shows three links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });
});
