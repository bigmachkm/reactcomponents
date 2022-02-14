import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ImageFilterStyles.css";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import key from "./config";

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;

const ImageFilter = () => {
  const [movies, setIsMovies] = useState([]);
  const [filtered, setIsFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const data = await axios.get(URL);
      setIsMovies(data.data.results);
      setIsFiltered(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Filter
        movies={movies}
        setIsFiltered={setIsFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered?.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ImageFilter;
