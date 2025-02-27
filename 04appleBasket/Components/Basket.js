const Basket = ({ appleCount, basketName }) => {
  return (
    <div className="basket">
      <h1>
        <span>{appleCount}</span> Apples
      </h1>
      <p>
        {basketName} {appleCount === 10 && "(Full)"}{" "}
        {appleCount === 0 && "(Empty)"}
        {appleCount >= 5 && appleCount != 10 && "(Half Full)"}
      </p>
    </div>
  );
};

export default Basket;
