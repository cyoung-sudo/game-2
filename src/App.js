import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateBoard } from "./redux/boardSlice";
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";
// Utils
import { movePlayer } from "./utils/generalUtils";

function App() {
  // Hooks
  let {board} = useSelector((state) => state.board);
  let dispatch = useDispatch();

  let move = dir => {
    // Copy board & find player/enemy coords
    let boardCopy = new Array(board.length).fill(null).map(() => new Array(board[0].length));
    let player = null;
    let enemies = [];
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === "E") {
          enemies.push([i, j]);
        } else if(board[i][j] === "P") {
          player = [i, j];
        }

        boardCopy[i][j] = board[i][j];
      }
    }

    // Move player
    let updatedBoard = movePlayer(boardCopy, player, dir);

    dispatch(updateBoard(updatedBoard));
  }

  return (
    <div id="app">
      <div id="display-wrap">
        <Display/>
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
