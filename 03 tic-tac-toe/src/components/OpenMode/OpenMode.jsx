import PropTypes from 'prop-types';
import styles from './OpenMode.module.css';
import Logo from '../../assets/images/logo.svg';
import Button from '../Button';
import Icon from '../Icon';

function OpenMode({
  setIsGameStart,
  setWithPC,
  selectedMark,
  setSelectedMark,
}) {
  function handleNewGameClick(withPC) {
    setIsGameStart(true);
    setWithPC(withPC);
  }

  function handleChooseMark(e) {
    setSelectedMark(e.target.value);
  }

  return (
    <div className={styles.startMode}>
      <img src={Logo} alt="Tic Tac Toe" />
      <div className={styles.pickBox}>
        <fieldset>
          <legend>PICK PLAYER 1’S MARK</legend>
          <div className={styles.pickTags}>
            <input
              type="radio"
              id="x-mark"
              name="player-mark"
              value="x"
              className="sr-only"
              checked={selectedMark === 'x'}
              onChange={handleChooseMark}
            />
            <label htmlFor="x-mark">
              <Icon icon="x" variant="fill" aria-label="x" />
            </label>
            <input
              type="radio"
              id="o-mark"
              name="player-mark"
              value="o"
              className="sr-only"
              checked={selectedMark === 'o'}
              onChange={handleChooseMark}
            />
            <label htmlFor="o-mark">
              <Icon icon="o" variant="fill" aria-label="o" />
            </label>
          </div>
        </fieldset>
        <p>REMEMBER : X GOES FIRST</p>
      </div>
      <div className={styles.buttons}>
        <Button
          variant="bg-o"
          size="xl"
          onClick={() => handleNewGameClick(true)}
        >
          NEW GAME (VS CPU)
        </Button>
        <Button
          variant="bg-x"
          size="xl"
          onClick={() => handleNewGameClick(false)}
        >
          NEW GAME (VS PLAYER)
        </Button>
      </div>
    </div>
  );
}

export default OpenMode;

OpenMode.propTypes = {
  setIsGameStart: PropTypes.func.isRequired,
  setWithPC: PropTypes.func.isRequired,
  selectedMark: PropTypes.oneOf(['x', 'o']).isRequired,
  setSelectedMark: PropTypes.func.isRequired,
};
