import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { getWinnerName } from '../../utils/game';
import styles from './Modal.module.css';
import Icon from '../Icon';
import Button from '../Button';

function Modal({ winner, userChoice, autoPlay, quitGame, restartGame }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.dialog}>
        {winner !== 'tie' && (
          <p className={styles.winner}>
            {getWinnerName(winner, userChoice, autoPlay)}
          </p>
        )}
        <h2 className={`${styles.result}`}>
          {winner === 'tie' ? (
            <>RESTART GAME?</>
          ) : (
            <>
              <Icon
                icon={winner}
                size="xl"
                variant={`${winner}-fill`}
                aria-label="x"
              />
              <span className={styles[`${winner}-text`]}>TAKES THE ROUND</span>
            </>
          )}
        </h2>
        <div className={styles.buttons}>
          <Button variant="bg-secondary" size="md" onClick={quitGame}>
            QUIT
          </Button>
          <Button variant="bg-o" size="md" onClick={restartGame}>
            NEXT ROUND
          </Button>
        </div>
      </div>
    </div>
  );
}

function ModalWrapper(props) {
  const modalRoot = document.getElementById('modal');
  return createPortal(<Modal {...props} />, modalRoot);
}

export default ModalWrapper;

Modal.propTypes = {
  winner: PropTypes.string.isRequired,
  userChoice: PropTypes.oneOf(['x', 'o']).isRequired,
  autoPlay: PropTypes.bool.isRequired,
  quitGame: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
};
