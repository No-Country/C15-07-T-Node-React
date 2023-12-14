import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

describe('Login', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
  });

  it('renders Login Page', () => {
    const headline = screen.getByRole('heading', { name: /Iniciar sesión/i });
    expect(headline).toBeInTheDocument();
  });

  it('shows error message when email is empty', () => {
    const button = screen.getByRole('button', { name: /Iniciar sesión/i });
    expect(button).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/Correo/i);
    expect(emailInput).toHaveClass('input-primary');

    fireEvent.change(emailInput, { target: { value: '' } });

    fireEvent.click(button);

    expect(emailInput).toHaveClass('input-error');

    // const errorMessage = screen.getByText(/El correo es requerido/i);
    // expect(errorMessage).toBeInTheDocument();
  });
});
