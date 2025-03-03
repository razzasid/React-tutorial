import ColorBox from "./ColorBox";
import "./boxcolor.css";

function ColorBoxes({ colors }) {
  return (
    <div className="container">
      <ColorBox colors={colors} />
    </div>
  );
}

export default ColorBoxes;
