import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import MainCalculator from './calculator';

describe('snapshot testing', () => {
  it('first snapshot', () => {
    const itemRender = renderer.create(<MainCalculator />).toJSON();
    expect(itemRender).toMatchSnapshot();
  });
});
describe('Home nav item', () => {
  it('testing home', () => {
    render(<MainCalculator />);
    const ele = screen.getByTestId('calculatorTest');
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveTextContent('AC');
    expect(ele).toHaveTextContent('+');
    expect(ele).toHaveTextContent('-');
    expect(ele).toHaveTextContent('x');
    expect(ele).toHaveTextContent('Lets do some Math!');
  });
});
