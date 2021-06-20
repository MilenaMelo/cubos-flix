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
  const [movies, setMovies] = useState(list_movies);
  const [moviesFilter, setMoviesFilter] = useState("");
  const [moviesInBasket, setMoviesInBasket] = useState([]);
  const [basketFinalPrice, setBasketFinalPrice] = useState(0);

  useEffect(() => {
    async function carregarFilmes() {
      const resposta = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR');

      const { results } = await resposta.json();

      setMovies(results);
    }

    carregarFilmes();
  }, []);

  function filterMovie(movie) {
    if (!moviesFilter) return movie;

    if (movie.title.includes(moviesFilter)) {
      return movie;
    }
  }

  function getDiscountedPrice(price) {
    return Number(price.toFixed(2));
  }

  function sendPurchase(movie) {
    const newMovies = [...moviesInBasket];
    const movieInBasket = newMovies.find(
      ({ title }) => title === movie.title,
    );

    if (movieInBasket) {
      movieInBasket.count++;
      setMoviesInBasket(newMovies);
      const newPrice = getDiscountedPrice(
        movieInBasket.price + basketFinalPrice,
      );
      setBasketFinalPrice(newPrice);
      return;
    }

    newMovies.push({
      title: movie.title,
      backgroundImg: movie.poster_path,
      price: movie.price,
      count: 1,
    });
    setMoviesInBasket(newMovies);
    const newPrice = getDiscountedPrice(movie.price + basketFinalPrice);
    setBasketFinalPrice(newPrice);
  }

  function handleMovieAdd(movieTitle) {
    const newMovies = [...moviesInBasket];
    const movieInBasket = newMovies.find(
      ({ title }) => title === movieTitle,
    );

    movieInBasket.count++;
    setMoviesInBasket(newMovies);
    const newPrice = getDiscountedPrice(
      movieInBasket.price + basketFinalPrice,
    );
    setBasketFinalPrice(newPrice);
  }

  function handleMovieRemoval(movieTitle) {
    const newMovies = [...moviesInBasket];
    const movieInBasket = newMovies.find(
      ({ title }) => title === movieTitle,
    );
    const newPrice = getDiscountedPrice(
      basketFinalPrice - movieInBasket.price,
    );
    setBasketFinalPrice(newPrice);

    movieInBasket.count--;
    if (movieInBasket.count === 0) {
      setMoviesInBasket(
        newMovies.filter(({ title }) => title !== movieTitle),
      );
      return;
    }

    setMoviesInBasket(newMovies);
  }


  return (
    <div className='app'>
      <header className='header'>
        <Navbar setMoviesFilter={setMoviesFilter} />
      </header>
      <section className='content'>
        <div className='top-movies'>
          <h1>Top Filmes</h1>
          <div className='movie-grid'>
            {movies.slice(0, 5).map((movie) => (
              <Cards {...movie} sendPurchase={sendPurchase} />
            ))}
          </div>
        </div>
        <div className='all-movies'>
          <h1>Filmes</h1>
          <div className='movie-grid'>
            {movies.filter(filterMovie).map((movie) => (
              <Cards {...movie} sendPurchase={sendPurchase} />
            ))}
          </div>
        </div>
      </section>
      <section className='side-content'>
        <Bag
          className="bag-button"
          moviesInBasket={moviesInBasket}
          finalPrice={basketFinalPrice}
          handleMovieAdd={handleMovieAdd}
          handleMovieRemoval={handleMovieRemoval}
        />
      </section>
    </div>
  );
}

export default App;
