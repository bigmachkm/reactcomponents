import React, { useEffect } from "react";

const Filter = ({ movies, setIsFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setIsFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setIsFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filtered-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? "active" : ""}
        onClick={() => setActiveGenre(12)}
      >
        Comedy
      </button>
    </div>
  );
};

export default Filter;
