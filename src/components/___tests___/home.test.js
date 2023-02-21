import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Home from '../home';

describe('snapshot testing', () => {
  it('first snapshot', () => {
    const itemRender = renderer.create(<Home />).toJSON();
    expect(itemRender).toMatchSnapshot();
  });
});

describe('Home nav item', () => {
  it('testing home', () => {
    render(<Home />);
    const ele = screen.getByTestId('homeTest');
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveTextContent('Welcome to our page');
  });
});
