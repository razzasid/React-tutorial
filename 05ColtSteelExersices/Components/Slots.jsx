function Slots({ val1, val2, val3 }) {
  let isWin = val1 === val2 && val2 === val3;
  return (
    <div className="container">
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h1 style={{ color: isWin ? "green" : "red" }}>
        {isWin ? "You Win" : "You Lose"}
      </h1>
      {isWin && <h1>Congrats</h1>}
    </div>
  );
}

export default Slots;
