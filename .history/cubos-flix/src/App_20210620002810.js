/* ----------- IMPORT STATES ----------- */
import React, { useState, useEffect } from "react";

/* ----------- IMPORT PAGES ----------- */
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';

/* ----------- IMPORT VARIABLES ----------- */
import list_movies from './data/data.js';


/* ---------------------- APPLICATION ----------------------- */
function App() {
  const [movies] = useState(list_movies);
  const [moviesFilter, setMoviesFilter] = useState("");


  function filterMovie(movie) {
    if (!moviesFilter) return movie;

    if (movie.title.includes(moviesFilter)) {
      return movie;
    }
  }

  return (
    <div className='app'>
      <header className='header'>
        <Navbar setMoviesFilter={ setMoviesFilter }/>
      </header>
      <section className='content'>
        <div className='top-movies'>
          <h1>Top Filmes</h1>
          <div className='movie-grid'>
            {movies.slice(0, 5).map((movie) => (
              <Cards {...movie} />
            ))}
          </div>
        </div>
        <div className='all-movies'>
          <h1>Filmes</h1>
          <div className='movie-grid'>
            {movies.filter(filterMovie).map((movie) => (
              <Cards {...movie} />
            ))}
          </div>
        </div>
      </section>
      <section className='side-content'>
        <Bag />
      </section>
    </div>
  );
}

export default App;
