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

/**
 *
 * @param {*} onTurnMark the mark of the player who is on turn
 * @returns the mark of the next player
 */
export function calculateNextMark(onTurnMark) {
  return onTurnMark === 'x' ? 'o' : 'x';
}

/**
 *
 * @param {*} squares the current state of the board
 * @returns the index of the next step
 */
export function calculateNextStep(squares) {
  const possibleWinningIndexes = winningLines.reduce((acc, line) => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && !squares[c]) {
      acc.push(c);
    }
    if (squares[a] && squares[a] === squares[c] && !squares[b]) {
      acc.push(b);
    }
    if (squares[b] && squares[b] === squares[c] && !squares[a]) {
      acc.push(a);
    }
    return acc;
  }, []);

  const emptySquares = squares
    .map((s, i) => (s === null ? i : null))
    .filter((s) => s !== null);

  // Get random index from empty squares
  const randomNumber = Math.floor(Math.random() * emptySquares.length);
  const randomEmptySquare = emptySquares[randomNumber];

  return possibleWinningIndexes.length > 0
    ? possibleWinningIndexes[0]
    : randomEmptySquare;
}

/**
 *
 * @param {*} squares the current state of the board
 * @returns the winner mark or null if there is no winner
 */
export function calculateWinner(squares) {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/**
 * @param {*} userChoice the mark that the user choiced
 * @param {*} mark the mark to be compared
 * @param {*} autoPlay if the game is in auto play mode
 * @returns the display name of the player
 */
export function getPlayerName(userChoice, mark, autoPlay) {
  if (!autoPlay) {
    return userChoice === mark ? 'P1' : 'P2';
  } else {
    return userChoice === mark ? 'You' : 'PC';
  }
}

/**
 *
 * @param {*} winner the winner mark 'x' or 'o'
 * @param {*} userChoice the mark that the user 1 choiced
 * @param {*} autoPlay if the game is in auto play mode
 * @returns the display name of the winner
 */
export function getWinnerName(winner, userChoice, autoPlay) {
  if (autoPlay) {
    if (winner === userChoice) {
      return 'YOU WON!';
    } else {
      return 'OH NO, YOU LOST…';
    }
  } else {
    return `PLAYER ${
      getPlayerName(winner, userChoice, autoPlay) === 'P1' ? '1' : '2'
    } WON!`;
  }
}
