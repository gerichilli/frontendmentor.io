import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Icon from '../Icon';
import Button from '../Button';

function Modal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.dialog}>
        <p className={styles.winner}>PLAYER 1 WINS!</p>
        <h2 className={`${styles.result}`}>
          <Icon icon="x" size="xl" variant={`x-fill`} aria-label="x" /> TAKES
          THE ROUND
        </h2>
        <div className={styles.buttons}>
          <Button variant="bg-secondary" size="md">
            QUIT
          </Button>
          <Button variant="bg-o" size="md">
            NEXT ROUND
          </Button>
        </div>
      </div>
    </div>
  );
}

function ModalWrapper() {
  const modalRoot = document.getElementById('modal');
  return createPortal(<Modal />, modalRoot);
}

export default ModalWrapper;
