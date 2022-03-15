import { render, screen } from '@testing-library/react';
import Login from '../index';

describe('Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('Checks empty email', () => {
    const emailElement = screen.getByTestId('email');
    const currentEmailValue = emailElement.getAttribute('value');

    expect(currentEmailValue).toEqual('');
  });

  test('Checks email update', () => {
    const testEmail = 'demo@example.com';

    const emailElement = screen.getByTestId('email');
    emailElement?.setAttribute('value', testEmail);

    expect(emailElement.getAttribute('value')).toStrictEqual(testEmail);
  });

  test('checks email label visibility', () => {
    const emailElement = screen.getByLabelText('Email');

    expect(emailElement).toBeVisible;
  });

  test('checks empty password', () => {
    const passwordElement = screen.getByTestId('password');
    const currentPasswordValue = passwordElement.getAttribute('value');

    expect(currentPasswordValue).toEqual('');
  });

  test('checks password update', () => {
    const testPassword = 'test@1234';

    const passwordElement = screen.getByTestId('password');
    passwordElement?.setAttribute('value', testPassword);

    expect(passwordElement.getAttribute('value')).toStrictEqual(testPassword);
  });

  test('checks password label visibility', () => {
    const passwordElement = screen.getByLabelText('Password');

    expect(passwordElement).toBeVisible;
  });
});
