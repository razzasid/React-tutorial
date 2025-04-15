import "./CountryListShimmer.css";

function CountryListShimmer() {
  // new Array(10).fill(" ");

  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((el, i) => {
        return <div key={i} className="country-card shimmer loading"></div>;
      })}
    </div>
  );
}

export default CountryListShimmer;
