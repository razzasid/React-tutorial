const Button = ({ clickHandler, imageUrl, arrowDirection }) => {
  return (
    <button onClick={clickHandler} title={arrowDirection}>
      <img src={imageUrl} alt={arrowDirection} />
    </button>
  );
};

export default Button;
