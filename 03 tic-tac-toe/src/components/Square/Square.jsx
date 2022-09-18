import PropTypes from 'prop-types';
import styles from './Square.module.css';
import Icon from '../Icon';

function Square({ square, nextMark, squareHoverHide, onClick }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {square ? (
        <Icon
          icon={square}
          size="xl"
          variant={`${square}-fill`}
          aria-label={square}
        />
      ) : (
        <>
          {!squareHoverHide && (
            <span>
              <Icon
                icon={`${nextMark}_outline`}
                size="xl"
                variant={`${nextMark}-outline`}
                arial-label={nextMark}
              />
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default Square;

Square.propTypes = {
  square: PropTypes.oneOf(['x', 'o']),
  nextMark: PropTypes.oneOf(['x', 'o']).isRequired,
  squareHoverHide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
