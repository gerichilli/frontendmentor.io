import { useState } from 'react';
import Board from '../Board/Board';
import OpenMode from '../OpenMode';
import styles from './Game.module.css';

function Game() {
  const [gameStart, setGameStart] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false); // true: play with PC
  const [userChoice, setUserChoice] = useState('x'); // 'x' or 'o'

  return (
    <main className={styles.game}>
      <div className={styles.container}>
        <h1 className="sr-only">Tic Tac Toe</h1>
        {gameStart ? (
          <Board
            setGameStart={setGameStart}
            autoPlay={autoPlay}
            userChoice={userChoice}
          />
        ) : (
          <OpenMode
            setGameStart={setGameStart}
            setAutoPlay={setAutoPlay}
            userChoice={userChoice}
            setUserChoice={setUserChoice}
          />
        )}
      </div>
    </main>
  );
}

export default Game;
