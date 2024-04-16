import "./Board.scss";
// Icons
import { BsPersonWalking } from "react-icons/bs";
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
              {val === "P" && <BsPersonWalking/>}
              {val === "_" && "_"}
              {val === "W" && <GiBrickWall/>}
              {val === "E" && <GiEvilMinion/>}
              {val === "S" && <GiBroadsword/>}
              {val === "H" && <TiHeart/>}
              {val === "B" && <GiUnlitBomb/>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;