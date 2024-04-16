import "./Display.scss";

const Display = ({health, swords, bombs}) => {
  return (
    <div id="display">
      <div>Health: {health}/3</div>
      <div>Swords: {swords}/2</div>
      <div>Bombs: {bombs}/1</div>
    </div>
  );
};

export default Display;