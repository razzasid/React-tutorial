import { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
// import { ThemeContext } from "../contexts/ThemeContext.js";
import { useTheme } from '../hooks/useTheme'

function Home() {
  const [query, setQuery] = useState("");

  const [isDark] = useTheme();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  );
}

export default Home;
