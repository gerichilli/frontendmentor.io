import PropTypes from 'prop-types';
import { icons } from '../../assets/icon';
import { classNames } from '../../utils/css';
import styles from './Icon.module.css';

function Icon({ icon, variant, size, ...props }) {
  const iconClass = classNames(
    styles.icon,
    variant && styles[variant],
    size && styles[size],
  );

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
      {...props}
    >
      {icons[icon]}
    </svg>
  );
}

export default Icon;

Icon.defaultProps = {
  variant: 'fill',
  size: 'md',
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  variant: PropTypes.oneOf([
    'fill',
    'fill-dark',
    'x-fill',
    'o-fill',
    'o-outline',
    'x-outline',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'xl']),
};
