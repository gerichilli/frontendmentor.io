import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.svg';
import styles from './Board.module.css';
import Button from '../Button';
import Icon from '../Icon';
import Square from '../Square';
import ModalWrapper from '../Modal';

const GOFIRST = 'x';
const initialSquare = Array(9).fill(null);
const initialScore = { x: 0, o: 0, tie: 0 };

function Board({ withPC, selectedMark, setIsGameStart }) {
  const [isPCTurn, setIsPCTurn] = useState(withPC && selectedMark !== GOFIRST);
  const [mark, setMark] = useState(GOFIRST); // Active player's mark
  const [squares, setSquares] = useState(initialSquare); // Board data
  const [score, setScore] = useState(initialScore); // Score
  const [winner, setWinner] = useState(null); // Winner

  function handleRestart() {
    setIsGameStart(false);
    setMark(GOFIRST);
    setSquares(initialSquare);
    setScore(initialScore);
  }

  function handleSquareClick(index) {
    if (squares[index] !== null) return; // if square is already filled, do nothing
    const newSquares = [...squares];
    newSquares[index] = mark;
    setSquares(newSquares);
    setMark(calculateNextMark());
    withPC && setIsPCTurn((prevIsPCTurn) => !prevIsPCTurn); // switch player
  }

  useEffect(() => {
    if (isPCTurn) {
      const nextStep = calculateNextStep();
      // Fill random square
      handleSquareClick(nextStep);
    }
  }, [isPCTurn]); //eslint-disable-line

  useEffect(() => {
    const win = calculateWinner();
    if (win) {
      setWinner(win);
      setScore((prevScore) => ({
        ...prevScore,
        [win]: prevScore[win] + 1,
      }));
    } else if (!squares.includes(null)) {
      setWinner('tie');
      setScore((prevScore) => ({
        ...prevScore,
        tie: prevScore.tie + 1,
      }));
    }
  }, [squares]); //eslint-disable-line

  function calculateNextMark() {
    return mark === 'x' ? 'o' : 'x';
  }

  function calculateNextStep() {
    const emptySquares = squares
      .map((s, i) => (s === null ? i : null))
      .filter((s) => s !== null);
    // Get random index from empty squares
    const randomNumber = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomNumber];
  }

  function calculateWinner() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <div>
      <div className={styles.top}>
        <img src={Logo} alt="Tic Tac Toe" />
        <div className={styles.onTurn}>
          <Icon icon={mark} size="sm" variant="fill" aria-label={mark} /> turn
        </div>
        <Button variant="bg-secondary" size="md" onClick={handleRestart}>
          <Icon icon="home" size="sm" variant="fill-dark" aria-label="home" />
        </Button>
        <Button variant="bg-secondary" size="md">
          <Icon
            icon="undo"
            size="sm"
            variant="fill-dark"
            aria-label="restart"
          />
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
      <div className={styles.board}>
        {squares.map((square, index) => (
          <Square
            key={index}
            square={square}
            mark={mark}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.sum_px}>
          <p>X (P2)</p>
          <p>{score.x}</p>
        </div>
        <div className={styles.sum_ties}>
          <p>TIES</p>
          <p>{score.tie}</p>
        </div>
        <div className={styles.sum_po}>
          <p>O (P1)</p>
          <p>{score.o}</p>
        </div>
      </div>
      <ModalWrapper />
    </div>
  );
}

export default Board;

Board.propTypes = {
  withPC: PropTypes.bool.isRequired,
  selectedMark: PropTypes.oneOf(['x', 'o']).isRequired,
  setIsGameStart: PropTypes.func.isRequired,
};
