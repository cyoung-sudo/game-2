import "./Actions.scss";
// Icons
import { GiBroadsword } from "react-icons/gi";
import { GiUnlitBomb } from "react-icons/gi";

const Actions = ({attack}) => {
  return (
    <div id="actions">
      <div className="actions-ingame">
        <div className="actions-ingame-top">
          <button onClick={attack}><GiBroadsword/></button>
        </div>

        <div className="actions-ingame-bot">
          <button><GiUnlitBomb/></button>
        </div>
      </div>

      <div className="actions-newgame">
        <button>New Game</button>
      </div>
    </div>
  );
};

export default Actions;