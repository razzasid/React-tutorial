function ShoppingItemsList({ item, completed, quantity }) {
  const style = {
    color: completed ? "red" : "grey",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <li style={style}>
      {item} - {quantity}
    </li>
  );
}

export default ShoppingItemsList;
