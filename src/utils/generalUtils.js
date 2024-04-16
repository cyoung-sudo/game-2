// Utils
import { defaultBoards } from "../data/boardData";

export const movePlayer = (board, player, dir) => {
  let generateNew = false; // Generate new board?
  let cellVal = null; // Value of new cell
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
  } else if(dir === "down") {
    newCell = (x + 1 < cL ? [x+1, y] : -1);
  // Skip
  } else if(dir === "skip") {
    return {
      board,
      generateNew,
      cellVal: "P"
    };
  }

  // Valid coords
  if(newCell !== -1) {
    let newVal = board[newCell[0]][newCell[1]];

    // Check for wall
    if(newVal !== "W") {
      // Set cellVal
      if(newVal === "E") {
        cellVal = "E";
      } else if(newVal === "S") {
        cellVal = "S"
      } else if(newVal === "H") {
        cellVal = "H"
      } else if(newVal === "B") {
        cellVal = "B"
      } else if(newVal === "_") {
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

export const moveEnemies = (board, enemies) => {
  let attacked = false;
  
  for(let coord of enemies) {
    let x = coord[0];
    let y = coord[1];
    let rL = board[0].length;
    let cL = board.length;

    // Find all valid new cells (up, left, right, down)
    let options = [];
    if(x - 1 >= 0 && board[x-1][y] !== "W" && board[x-1][y] !== "E") {
      options.push([x-1, y]);
    }
    if(y - 1 >= 0 && board[x][y-1] !== "W" && board[x][y-1] !== "E") {
      options.push([x, y-1]);
    }
    if(y + 1 < rL && board[x][y+1] !== "W" && board[x][y+1] !== "E") {
      options.push([x, y+1]);
    }
    if(x + 1 < cL && board[x+1][y] !== "W" && board[x+1][y] !== "E") {
      options.push([x+1, y]);
    }

    // Enemy is stuck
    if(options.length === 0) continue;

    // Pick random direction
    let randCoord = options[Math.floor(Math.random() * options.length)];

    // Player attacked
    if(board[randCoord[0]][randCoord[1]] === "P") {
      attacked = true;
      board[x][y] = "_";
    // Move enemy
    } else {
      board[randCoord[0]][randCoord[1]] = "E";
      board[x][y] = "_";
    }
  }

  return {
    board,
    attacked
  }
}

export const generateBoard = () => {
  let newBoard = new Array(9).fill(null).map(() => new Array(11));
  // Set options ratios
  let options = new Array(45).fill("_");
  options.push(...new Array(45).fill("W"));
  options.push(...new Array(9).fill("E"));
  options.push(...new Array(3).fill("S"));
  options.push(...new Array(2).fill("H"));
  options.push(...new Array(1).fill("B"));

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

  // Check for valid path from center to edges
  let start = [colMid, rowMid];
  let validPath = bfs(newBoard, start);

  // Return generated board
  if(validPath) {
    return newBoard;
  // Return default board
  } else {
    let randBoard = defaultBoards[Math.floor(Math.random() * defaultBoards.length)];
    return randBoard;
  }
};

let bfs = (board, start) => {
  let visited = {};
  let queue = [];
  let found = false;

  // Add initial start coord
  queue.push(start);
  visited[start[0] + "," + start[1]] = true;

  while(queue.length && !found) {
    let queueL = queue.length;
    for(let i = 0; i < queueL; i++) {
      let coord = queue.shift();
      let x = coord[0];
      let y = coord[1];
      let rL = board[0].length;
      let cL = board.length;

      // Find adjcent coords
      let up = (x - 1 >= 0 ? [x-1, y] : null);
      let left = (y - 1 >= 0 ? [x, y-1] : null);
      let right = (y + 1 < rL ? [x, y+1] : null);
      let down = (x + 1 < cL ? [x+1, y] : null);
      let dirs = [up, left, right, down];

      for(let dir of dirs) {
        // Valid coord
        if(dir) {
          let str = dir[0] + "," + dir[1];
          if(!visited[str] && board[dir[0]][dir[1]] !== "W") {
            visited[str] = true;
            queue.push(dir);
          }
        // Path found
        } else {
          found = true;
          break;
        }
      }
    }
  }

  return found;
}