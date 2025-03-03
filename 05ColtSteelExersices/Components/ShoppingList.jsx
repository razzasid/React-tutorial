import ShoppingItemsList from "./ShoppingItemsList";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        // <ShoppingItemsList
        //   key={i.id}
        //   item={i.item}
        //   quantity={i.completed}
        //   completed={i.completed}
        // />
        <ShoppingItemsList key={i.id} {...i} />
      ))}
    </ul>
  );
}

export default ShoppingList;
