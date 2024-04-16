import "./Actions.scss";
// Icons
import { GiBroadsword } from "react-icons/gi";
import { GiUnlitBomb } from "react-icons/gi";

const Actions = ({useSword, useBomb, newGame}) => {
  return (
    <div id="actions">
      <div className="actions-ingame">
        <div className="actions-ingame-top">
          <button onClick={useSword}><GiBroadsword/></button>
        </div>

        <div className="actions-ingame-bot">
          <button onClick={useBomb}><GiUnlitBomb/></button>
        </div>
      </div>

      <div className="actions-newgame">
        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  );
};

export default Actions;