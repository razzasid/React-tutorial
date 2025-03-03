import ColorBox from "./ColorBox";
import "./boxcolor.css";

function ColorBoxes({ colors }) {
  let boxes = [];
  for (let i = 0; i < colors.length; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }

  console.log(boxes);

  return <div className="container">{boxes}</div>;
}

export default ColorBoxes;
