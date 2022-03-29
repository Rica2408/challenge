import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react'
import axios from 'axios';
import { mocked } from 'ts-jest/dist/utils/testing';
import App from '../App'

jest.mock("@auth0/auth0-react");
const mockedUseAuth0: any = mocked(useAuth0, true);

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|12345678901234",
};

jest.mock('axios');

describe('userAutentication true', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: false,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithPopup: jest.fn(),
      isLoading: false,
    });
  })
  test('useAuth0 test isAuthenticated false', async () => {
    render(<App />)
    expect(screen.getByText('Log in')).toBeTruthy()
  });
});



