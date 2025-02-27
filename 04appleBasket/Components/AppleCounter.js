//Declarative Programming

import Button from "./Button";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import Basket from "./Basket";
import { useState } from "react";

// const totalAppleCount = 10;
// let rightAppleCount = 0;
// let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(10);
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
      // root.render(<AppleCounter root={root} />);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
      // root.render(<AppleCounter root={root} />);
    }
  };

  return (
    <section>
      <Basket appleCount={leftAppleCount} basketName={"Basket 1"} />
      <Button
        clickHandler={leftClickHandler}
        imageUrl={leftArrow}
        arrowDirection={"left-arrow"}
      />
      <Button
        clickHandler={rightClickHandler}
        imageUrl={rightArrow}
        arrowDirection={"right-arrow"}
      />
      <Basket appleCount={rightAppleCount} basketName={"Basket 2"} />
    </section>
  );
};

export default AppleCounter;
