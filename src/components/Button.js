// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button({ onClick, keyPad, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {keyPad}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  keyPad: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
