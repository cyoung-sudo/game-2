export const movePlayer = (board, player, dir) => {
  let x = player[0];
  let y = player[1];
  let rL = board[0].length;
  let cL = board.length;

  // Determine new cell
  let newCell = null
  if(dir === "up") {
    newCell = (x - 1 >= 0 ? [x-1, y] : -1);
  } else if(dir === "left") {
    newCell = (y - 1 >= 0 ? [x, y-1] : -1);
  } else if(dir === "right") {
    newCell = (y + 1 < rL ? [x, y+1] : -1);
  } else {
    newCell = (x + 1 < cL ? [x+1, y] : -1);
  }

  let generateNew = false; // Generate new board?
  let cellVal = null; // Value of new cell

  // Valid coords
  if(newCell !== -1) {
    let newVal = board[newCell[0]][newCell[1]];

    // Check for wall
    if(newVal !== "W") {
      // Set cellVal
      if(newVal === "S") {
        cellVal = "S"
      } else if(newVal === "H") {
        cellVal = "H"
      } else if(newVal === "B") {
        cellVal = "B"
      } else {
        cellVal = "_";
      }
        
      // Move player
      board[newCell[0]][newCell[1]] = "P";
      board[x][y] = "_";
    }
  } else {
    generateNew = true;
  }

  return {
    board,
    generateNew,
    cellVal
  };
};

export const generateBoard = () => {
  let newBoard = new Array(9).fill(null).map(() => new Array(11));
  let options = ["_", "_", "_", "_", "_", "_", "_", "W", "W", "W", "E", "S", "H", "B"];

  // Fill board w/ random options
  for(let i = 0; i < newBoard.length; i++) {
    for(let j = 0; j < newBoard[0].length; j++) {
      let randVal = options[Math.floor(Math.random() * options.length)];
      newBoard[i][j] = randVal;
    }
  }

  // Set player
  let rowMid = Math.floor(newBoard[0].length / 2);
  let colMid = Math.floor(newBoard.length / 2);
  newBoard[colMid][rowMid] = "P"

  return newBoard;
};