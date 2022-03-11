import { render } from '@testing-library/react'
import UserPage from '../index'

it('renders UserPage unchanged', () => {
  const { container } = render(<UserPage />)
  expect(container).toMatchSnapshot()
})