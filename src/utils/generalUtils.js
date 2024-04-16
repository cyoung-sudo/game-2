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

  // Valid coords
  if(newCell !== -1) {
    // Check for rock
    if(board[newCell[0]][newCell[1]] !== "R") {
      board[newCell[0]][newCell[1]] = "P";
      board[x][y] = "_";
    }
  }

  return board;
}