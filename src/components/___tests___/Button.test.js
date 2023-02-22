import renderer from 'react-test-renderer';
import Button from '../Button';

describe('snapshot testing', () => {
  it('first snapshot', () => {
    const itemRender = renderer.create(<Button />).toJSON();
    expect(itemRender).toMatchSnapshot();
  });
});
