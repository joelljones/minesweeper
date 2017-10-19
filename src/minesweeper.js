const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (i = 0; i < numberOfRows; i++) {
    let row = [];
    for (j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (i = 0; i < numberOfRows; i++) {
    let row = [];
    for (j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
};
