import renderer from 'react-test-renderer';
import Button from '../Button';

describe('snapshot testing', () => {
  it('first snapshot', () => {
    const keyClick = () => {};
    const itemRender = renderer
      .create(
        <Button keyPad="AC" onClick={keyClick} className="greyKey" />,
      )
      .toJSON();
    expect(itemRender).toMatchSnapshot();
  });
});
