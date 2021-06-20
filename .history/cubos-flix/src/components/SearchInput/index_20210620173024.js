/* ---------------------- IMPORTS --------------------------- */
import { useState } from 'react';

// --- import pages
import './styles.css';
import search_icon from '../../assets/images/search-icon.svg'

/* ---------------------- APPLICATION ----------------------- */
function SearchInput({ setMoviesNameFilter }) {
  const [search, setSearch] = useState('');

  function keyPress(e) {
    if (e.key !== 'Enter') return;

    setMoviesNameFilter(search);
  }

  return (
    <div className="search-container">
      <input className='search-input' type="text" name="Pesquisa" placeholder="Pesquise filmes..." onChange={e => setSearch(e.target.value)} onKeyPress={e => keyPress(e)} />
      <img className='search-img' src={search_icon} alt="Input de pesquisa" />
    </div>
  );
}

export default SearchInput;