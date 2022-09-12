import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { classNames } from '../../utils/css';

function Button({ variant, size, children, ...props }) {
  const buttonClass = classNames(
    styles.button,
    variant && styles[variant],
    size && styles[size],
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(['bg-o', 'bg-x', 'bg-secondary']).isRequired,
  size: PropTypes.oneOf(['md', 'xl']).isRequired,
};
