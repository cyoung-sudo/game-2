import "./Movement.scss";
// Icons
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";


const Movement = () => {
  return (
    <div id="movement">
      <div className="movement-top">
        <button><FaLongArrowAltUp/></button>
      </div>

      <div className="movement-mid">
        <button><FaLongArrowAltLeft/></button>
        <button><FaLongArrowAltRight/></button>
      </div>

      <div className="movement-bot">
        <button><FaLongArrowAltDown/></button>
      </div>
    </div>
  );
};

export default Movement;