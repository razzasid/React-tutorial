import Property from "./Property";
function ProperyList({ properties }) {
  return (
    <>
      {properties.map((i) => (
        <Property key={i.id} {...i} />
      ))}
    </>
  );
}

export default ProperyList;
