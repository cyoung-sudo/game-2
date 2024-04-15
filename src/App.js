import './App.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Components
import Display from "./components/display/Display";
import Board from "./components/board/Board";
import Movement from "./components/controls/Movement";
import Actions from "./components/controls/Actions";

function App() {
  // Hooks
  let {board} = useSelector((state) => state.board);
  let dispatch = useDispatch();

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
          <Movement/>
        </div>

        <div id="actions-wrap">
          <Actions/>
        </div>
      </div>
    </div>
  );
}

export default App;
