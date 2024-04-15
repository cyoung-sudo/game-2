import "./Actions.scss";
// Icons
import { GiBroadsword } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";

const Actions = () => {
  return (
    <div id="actions">
      <div className="actions-ingame">
        <div className="actions-ingame-top">
          <button><GiBroadsword/></button>
        </div>

        <div className="actions-ingame-bot">
          <button><GiHealthPotion/></button>
        </div>
      </div>

      <div className="actions-newgame">
        <button>New Game</button>
      </div>
    </div>
  );
};

export default Actions;