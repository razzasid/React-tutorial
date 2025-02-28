import "../style.css";

function RandomPokemon() {
  let randomNumber = Math.floor(Math.random() * 152);
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;

  return (
    <div className="container">
      <h1>Pokemon #{randomNumber}</h1>
      <img src={url} />
    </div>
  );
}

export default RandomPokemon;
