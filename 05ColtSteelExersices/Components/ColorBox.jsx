import { useState } from "react";
import "./boxcolor.css";

function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function ColorBox({ colors }) {
  let [color, setColor] = useState(randomChoice(colors));

  const changeColor = () => {
    setColor(randomChoice(colors));
  };

  return (
    <div
      className="color-box"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorBox;
