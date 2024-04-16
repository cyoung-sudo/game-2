import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateBoard, resetBoard } from "./redux/boardSlice";
import { updateHealth, updateSwords, updateBombs, resetPlayer } from "./redux/playerSlice";
import { updateScore, updateFinish, resetGame } from "./redux/gameSlice";
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";
// Utils
import { movePlayer, moveEnemies, generateBoard } from "./utils/generalUtils";

function App() {
  // Hooks
  let {board} = useSelector((state) => state.board);
  let {health, swords, bombs} = useSelector((state) => state.player);
  let {score, finish} = useSelector((state) => state.game);
  let dispatch = useDispatch();

  let move = dir => {
    if(finish) return;

    // Copy board & find player coord
    let boardCopy = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let player = null;
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === "P") player = [i, j];
        boardCopy[i][j] = board[i][j];
      }
    }

    // Move player
    let res = movePlayer(boardCopy, player, dir);

    // Current board
    if(!res.generateNew) {
      // Player encountered enemy
      if(res.cellVal === "E") {
        if(health <= 1) dispatch(updateFinish(true));
        dispatch(updateHealth(health - 1));
      // Update player stats
      } else if(res.cellVal === "S" && swords < 2) {
        dispatch(updateSwords(swords + 1));
      } else if(res.cellVal === "H" && health < 3) {
        dispatch(updateHealth(health + 1));
      } else if(res.cellVal === "B" && bombs < 1) {
        dispatch(updateBombs(bombs + 1));
      }

      // Find enemy coords
      let enemies = [];
      for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
          if(res.board[i][j] === "E") enemies.push([i, j]);
        }
      }

      // Move enemies
      let res2 = moveEnemies(res.board, enemies);

      // Player attacked
      if(res2.attacked) {
        if(health <= 1) dispatch(updateFinish(true));
        dispatch(updateHealth(health - 1));
      }

      dispatch(updateBoard(res2.board));
    // Generate new board
    } else {
      let newBoard = generateBoard();
      dispatch(updateBoard(newBoard));
      dispatch(updateScore(score + 1));
    }
  };

  let useSword = () => {
    if(finish) return;
    if(swords <= 0) return;

    // Copy board & find player coord
    let boardCopy = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let player = null;
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === "P") player = [i, j];
        boardCopy[i][j] = board[i][j];
      }
    }

    // Kill nearby enemies (up, left, right, down)
    let x = player[0];
    let y = player[1];
    if(boardCopy[x-1][y] === "E") {
      boardCopy[x-1][y] = "_";
    }
    if(boardCopy[x][y-1] === "E") {
      boardCopy[x][y-1] = "_";
    }
    if(boardCopy[x][y+1] === "E") {
      boardCopy[x][y+1] = "_";
    }
    if(boardCopy[x+1][y] === "E") {
      boardCopy[x+1][y] = "_";
    }

    dispatch(updateSwords(swords - 1));

    // Find enemy coords
    let enemies = [];
    for(let i = 0; i < boardCopy.length; i++) {
      for(let j = 0; j < boardCopy[0].length; j++) {
        if(boardCopy[i][j] === "E") enemies.push([i, j]);
      }
    }

    // Move enemies
    let res = moveEnemies(boardCopy, enemies);

    // Player attacked
    if(res.attacked) {
      if(health <= 1) dispatch(updateFinish(true));
      dispatch(updateHealth(health - 1));
    }

    dispatch(updateBoard(res.board));
  };

  let useBomb = () => {
    if(finish) return;
    if(bombs <= 0) return;

    // Copy board & find enemy coords
    let boardCopy = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let enemies = []
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === "E") enemies.push([i, j]);
        boardCopy[i][j] = board[i][j];
      }
    }

    // Kill all enemies
    for(let coord of enemies) {
      boardCopy[coord[0]][coord[1]] = "_";
    }

    dispatch(updateBombs(bombs - 1));
    dispatch(updateBoard(boardCopy));
  };

  let newGame = () => {
    dispatch(resetGame());
    dispatch(resetBoard());
    dispatch(resetPlayer());
  };

  return (
    <div id="app">
      <div id="display-wrap">
        <Display
          health={health}
          swords={swords}
          bombs={bombs}
          score={score}
          finish={finish}/>
      </div>

      <div id="board-wrap">
        <Board board={board}/>
      </div>

      <div id="controls-wrap">
        <div id="movement-wrap">
          <Movement move={move}/>
        </div>

        <div id="actions-wrap">
          <Actions
            useSword={useSword}
            useBomb={useBomb}
            newGame={newGame}/>
        </div>
      </div>
    </div>
  );
}

export default App;
