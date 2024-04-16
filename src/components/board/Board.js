import "./Board.scss";
// Icons
import { BsPersonWalking } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { GiBrickWall } from "react-icons/gi";
import { GiEvilMinion } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { TiHeart } from "react-icons/ti";
import { GiUnlitBomb } from "react-icons/gi";

const Board = ({board}) => {
  return (
    <div id="board">
      {board.map((row, i) => (
        <div key={i}>
          {row.map((val, j) => (
            <div key={j}>
              {val === "P" && <span className="board-player"><BsPersonWalking/></span>}
              {val === "_" && <span className="board-empty"><LuDot/></span>}
              {val === "W" && <span className="board-wall"><GiBrickWall/></span>}
              {val === "E" && <span className="board-enemy"><GiEvilMinion/></span>}
              {val === "S" && <span className="board-sword"><GiBroadsword/></span>}
              {val === "H" && <span className="board-heart"><TiHeart/></span>}
              {val === "B" && <span className="board-bomb"><GiUnlitBomb/></span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;