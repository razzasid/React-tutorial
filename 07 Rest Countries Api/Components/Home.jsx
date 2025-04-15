import { useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
function Home() {
  const [query, setQuery] = useState("");

  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
}

export default Home;
