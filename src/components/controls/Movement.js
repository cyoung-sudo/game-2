import "./Movement.scss";
// Icons
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";


const Movement = ({move}) => {
  return (
    <div id="movement">
      <div className="movement-top">
        <button onClick={() => move("up")}><FaLongArrowAltUp/></button>
      </div>

      <div className="movement-mid">
        <button onClick={() => move("left")}><FaLongArrowAltLeft/></button>
        <button onClick={() => move("right")}><FaLongArrowAltRight/></button>
      </div>

      <div className="movement-bot">
        <button onClick={() => move("down")}><FaLongArrowAltDown/></button>
      </div>
    </div>
  );
};

export default Movement;