/*

To play Minesweeper, we will create instances of MineSweeperGame in command line.
For example:
In command line, navigate to the src directory and run `node`
Run `.load game.js` to load the contents of this file.
Then create a Game instance and run commands like so:
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
When done run `.exit`

*/

import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    // if there's a bomb at the flipped tile, lose
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over! Final Board:');
      this._board.print();
      // if there's no bombs and game is over, win
    } else if (!this._board.hasNonBombEmptySpaces()) {
      console.log('Congratulations, you won!');
      // if there's no bombs and game is not over, continue
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}
