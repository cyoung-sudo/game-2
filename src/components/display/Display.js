import "./Display.scss";
// icons
import { GiBroadsword } from "react-icons/gi";
import { TiHeart } from "react-icons/ti";
import { GiUnlitBomb } from "react-icons/gi";

const Display = ({health, swords, bombs, score, finish}) => {
  return (
    <div id="display">
      <div className="display-score">Score: {score}</div>

      {!finish &&
      <div className="display-stats">
        <div><TiHeart/> {health}/3</div>
        <div><GiBroadsword/> {swords}/2</div>
        <div><GiUnlitBomb/> {bombs}/1</div>
      </div>
      }

      {finish &&
      <div className="display-gameover">Game Over</div>
      }
    </div>
  );
};

export default Display;