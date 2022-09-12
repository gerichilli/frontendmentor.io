import React from 'react';
import styles from './Square.module.css';
import Icon from '../Icon';

function Square({ square, mark, onClick }) {
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
        <span>
          <Icon
            icon={`${mark}_outline`}
            size="xl"
            variant={`${mark}-outline`}
            arial-label={mark}
          />
        </span>
      )}
    </button>
  );
}

export default Square;
