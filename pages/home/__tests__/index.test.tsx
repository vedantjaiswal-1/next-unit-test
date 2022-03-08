import { render, screen } from '@testing-library/react';
import HomePage from '..';
import { Home } from '../../../component/home/Home';

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage></HomePage>);

    const heading = screen.getByRole('heading', {
      name: 'Next Testing'
    });

    expect(heading).toBeInTheDocument;
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(<Home label='click me'></Home>);
    expect(getByTestId('button')).toHaveTextContent;
  });
});
