import React from "react";

function Buscador({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search Cocktail"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Buscador;
