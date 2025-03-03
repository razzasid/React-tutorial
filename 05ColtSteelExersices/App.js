// import RandomPokemon from "./Components/RandomPokemon";
// import Slots from "./Components/Slots";
// import ShoppingList from "./Components/ShoppingList";
// import ProperyList from "./Components/ProperyList";
import ColorBox from "./Components/ColorBox";
import ColorBoxes from "./Components/ColorBoxes";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#F5FF33",
  "#FF8C33",
  "#8C33FF",
  "#33FF8C",
  "#FF3333",
  "#33FF33",
  "#3333FF",
  "#FFFF33",
  "#FF33FF",
  "#33FFFF",
  "#C70039",
  "#900C3F",
  "#581845",
  "#1ABC9C",
  "#2ECC71",
  "#3498DB",
  "#9B59B6",
  "#E74C3C",
  "#F1C40F",
];

function App() {
  return (
    <>
      <ColorBoxes colors={colors} />
      {/* <ProperyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍌" val2="🍌" val3="🍒" /> */}
    </>
  );
  // <RandomPokemon />;
}

export default App;
