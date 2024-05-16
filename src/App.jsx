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
    <main className="bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 sm:p-12">
        {characters.map((character) => (
          <li
            className="flex flex-col gap-2 border p-3 border-gray-300 list-none rounded-lg shadow-md bg-slate-100 m-4 "
            key={character.id}
          >
            <img src={character.image} alt={character.name}></img>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl">
              <h2> {character.name} </h2>
              <p>Status: {character.status} </p>
              <p>Species: {character.species} </p>
              <p>Origin: {character.origin.name} </p>
            </div>
          </li>
        ))}
      </div>
    </main>
  );
}

export default App;
