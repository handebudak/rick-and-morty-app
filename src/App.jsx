import React, { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 m-4">
        {characters.map((character) => (
          <li
            className="flex flex-col gap-2 border p-3 border-gray-500 rounded-lg list-none bg-gray-300 shadow-md"
            key={character.id}
          >
            <img src={character.image} alt={character.name} />
            <div>
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
