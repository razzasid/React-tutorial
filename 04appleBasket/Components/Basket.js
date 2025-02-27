import React from "react";

const Basket = ({ appleCount, basketName }) => {
  return (
    <div className="basket">
      <h1>
        <span>{appleCount}</span> Apples
      </h1>
      <p>{basketName}</p>
    </div>
  );
};

export default Basket;
