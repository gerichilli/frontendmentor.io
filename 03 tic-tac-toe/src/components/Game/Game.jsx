import { useState } from 'react';
import Board from '../Board/Board';
import OpenMode from '../OpenMode';
import styles from './Game.module.css';

function Game() {
  const [isGameStart, setIsGameStart] = useState(true);
  const [withPC, setWithPC] = useState(false); // Play with PC or real player
  const [selectedMark, setSelectedMark] = useState('o'); // Player 1's mark

  return (
    <main className={styles.game}>
      <div className={styles.container}>
        <h1 className="sr-only">Tic Tac Toe</h1>
        {isGameStart ? (
          <Board
            selectedMark={selectedMark}
            setIsGameStart={setIsGameStart}
            withPC={withPC}
          />
        ) : (
          <OpenMode
            setIsGameStart={setIsGameStart}
            setWithPC={setWithPC}
            selectedMark={selectedMark}
            setSelectedMark={setSelectedMark}
          />
        )}
      </div>
    </main>
  );
}

export default Game;
