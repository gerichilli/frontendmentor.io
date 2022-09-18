import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpenMode.module.css';
import Logo from '../../assets/images/logo.svg';
import Button from '../Button';
import Icon from '../Icon';

function OpenMode({ setGameStart, setAutoPlay, userChoice, setUserChoice }) {
  function handleNewGameClick(isAutoPlay) {
    setGameStart(true);
    setAutoPlay(isAutoPlay);
  }

  function handleChooseMark(e) {
    setUserChoice(e.target.value);
  }

  return (
    <div className={styles.startMode}>
      <img src={Logo} alt="Tic Tac Toe" />
      <div className={styles.pickBox}>
        <fieldset>
          <legend>PICK PLAYER 1’S MARK</legend>
          <div className={styles.pickTags}>
            {['x', 'o'].map((mark) => (
              <React.Fragment key={mark}>
                <input
                  type="radio"
                  id={`${mark}-mark`}
                  name="playe{r-mark"
                  value={mark}
                  className="sr-only"
                  checked={userChoice === mark}
                  onChange={handleChooseMark}
                />
                <label htmlFor={`${mark}-mark`}>
                  <Icon icon={mark} variant="fill" aria-label={mark} />
                </label>
              </React.Fragment>
            ))}
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
  setGameStart: PropTypes.func.isRequired,
  setAutoPlay: PropTypes.func.isRequired,
  userChoice: PropTypes.oneOf(['x', 'o']).isRequired,
  setUserChoice: PropTypes.func.isRequired,
};
