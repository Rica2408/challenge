import { render, screen } from '@testing-library/react'
import SignIn from '../screens/SingIn'

test('Log in', () => {
  render(<SignIn />)
  expect(screen.getByText('Log in')).toBeTruthy()
});
