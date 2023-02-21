import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Quote from './quote';

describe('snapshot testing', () => {
  it('first snapshot of quote', () => {
    const itemRender1 = renderer.create(<Quote />).toJSON();
    expect(itemRender1).toMatchSnapshot();
  });
});

describe('Quote nav item', () => {
  it('testing Quote', () => {
    render(<Quote />);
    const ele = screen.getByTestId('QuoteTest');
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveTextContent(
      'Mathematics is not about number equations, computations, or algorithms. It is about understanding William Paul Thurston.',
    );
  });
});
