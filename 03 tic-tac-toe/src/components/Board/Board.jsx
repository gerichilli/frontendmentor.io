import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getPlayerName,
  calculateNextMark,
  calculateNextStep,
  calculateWinner,
} from '../../utils/game';
import Logo from '../../assets/images/logo.svg';
import styles from './Board.module.css';
import Button from '../Button';
import Icon from '../Icon';
import Square from '../Square';
import ModalWrapper from '../Modal';

const TIME_FOR_PC_THINKING = 1500;
const GO_FIRST_MARK = 'x';
const initialSquare = Array(9).fill(null);
const initialScore = { x: 0, o: 0, tie: 0 };

function Board({ setGameStart, autoPlay, userChoice }) {
  const [squares, setSquares] = useState(initialSquare);
  const [onTurnMark, setOnTurnMark] = useState(GO_FIRST_MARK); // The mark that on turn
  const [score, setScore] = useState(initialScore);
  const [winner, setWinner] = useState(null);
  const [allowClick, setAllowClick] = useState(true); // For prevent user click when PC is thinking

  // Restart the currently playing game
  function handleRestart() {
    setSquares(initialSquare);
    setOnTurnMark(GO_FIRST_MARK);
    setWinner(null);
    setAllowClick(true);
  }

  // Reset the game, including score
  function handleReset() {
    handleRestart();
    setGameStart(false);
    setScore(initialScore);
  }

  function handleSquareClick(index) {
    console.log('click', onTurnMark, 'allowClick', allowClick);
    // if square is already filled or PC is thinking or there are a winner, do nothing
    if (squares[index] !== null || !allowClick) return;

    const newSquares = [...squares];
    newSquares[index] = onTurnMark;
    setSquares(newSquares);
    setOnTurnMark(calculateNextMark(onTurnMark));
  }

  useEffect(() => {
    // If player 2 is PC, calculate next step and auto mark the square
    if (autoPlay && userChoice !== onTurnMark && !winner) {
      setAllowClick(false);
      const pcTimeOut = setTimeout(() => {
        const nextStep = calculateNextStep(squares);
        handleSquareClick(nextStep);
        setAllowClick(true);
      }, TIME_FOR_PC_THINKING);

      return () => clearTimeout(pcTimeOut);
    }
  }, [onTurnMark, winner]); //eslint-disable-line

  useEffect(() => {
    const win = calculateWinner(squares);
    if (win) {
      setWinner(win);
      setScore((prevScore) => ({
        ...prevScore,
        [win]: prevScore[win] + 1,
      }));
      setAllowClick(false);
    } else if (!squares.includes(null)) {
      setWinner('tie');
      setScore((prevScore) => ({
        ...prevScore,
        tie: prevScore.tie + 1,
      }));
      setAllowClick(false);
    }
  }, [squares]); //eslint-disable-line

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <img src={Logo} alt="Tic Tac Toe" />
          <div className={styles.onTurn}>
            <Icon
              icon={onTurnMark}
              size="sm"
              variant="fill"
              aria-label={onTurnMark}
            />{' '}
            turn
          </div>
        </div>
        <div className={styles.top_right}>
          <Button variant="bg-secondary" size="md" onClick={handleReset}>
            <Icon icon="home" size="sm" variant="fill-dark" aria-label="home" />
          </Button>
          <Button variant="bg-secondary" size="md" onClick={handleRestart}>
            <Icon
              icon="restart"
              size="sm"
              variant="fill-dark"
              aria-label="restart"
            />
          </Button>
        </div>
      </div>
      <div className={styles.board}>
        {squares.map((square, index) => (
          <Square
            key={index}
            square={square}
            nextMark={onTurnMark}
            squareHoverHide={autoPlay && userChoice !== onTurnMark}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.sum_px}>
          <p>X ({getPlayerName(userChoice, 'x', autoPlay)})</p>
          <p>{score.x}</p>
        </div>
        <div className={styles.sum_ties}>
          <p>TIES</p>
          <p>{score.tie}</p>
        </div>
        <div className={styles.sum_po}>
          <p>O ({getPlayerName(userChoice, 'o', autoPlay)})</p>
          <p>{score.o}</p>
        </div>
      </div>
      {winner && (
        <ModalWrapper
          winner={winner}
          userChoice={userChoice}
          autoPlay={autoPlay}
          quitGame={handleReset}
          restartGame={handleRestart}
        />
      )}
    </div>
  );
}

export default Board;

Board.propTypes = {
  setGameStart: PropTypes.func.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  userChoice: PropTypes.oneOf(['x', 'o']).isRequired,
};
