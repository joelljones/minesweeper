'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (i = 0; i < numberOfRows; i++) {
    var row = [];
    for (j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (i = 0; i < numberOfRows; i++) {
    var row = [];
    for (j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    // has the potential to place bombs on top of already existing bombs
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
};