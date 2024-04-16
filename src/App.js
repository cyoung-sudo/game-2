import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateBoard } from "./redux/boardSlice";
import { updateHealth, updateSwords, updateBombs, updateDead } from "./redux/playerSlice";
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
  let {health, swords, bombs, dead} = useSelector((state) => state.player);
  let dispatch = useDispatch();

  let move = dir => {
    if(dead) return;

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
        if(health <= 1) dispatch(updateDead(true));
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
        if(health <= 1) dispatch(updateDead(true));
        dispatch(updateHealth(health - 1));
      }

      dispatch(updateBoard(res2.board));
    // Generate new board
    } else {
      let newBoard = generateBoard();
      dispatch(updateBoard(newBoard));
    }
  }

  return (
    <div id="app">
      <div id="display-wrap">
        <Display
          health={health}
          swords={swords}
          bombs={bombs}/>
      </div>

      <div id="board-wrap">
        <Board board={board}/>
      </div>

      <div id="controls-wrap">
        <div id="movement-wrap">
          <Movement move={move}/>
        </div>

        <div id="actions-wrap">
          <Actions/>
        </div>
      </div>
    </div>
  );
}

export default App;
