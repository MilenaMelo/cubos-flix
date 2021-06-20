import './style.css'
import logo from '../../assets/images/logo.svg'
import search_icon from '../../assets/images/search-icon.svg'
import profile_img from '../../assets/images/profile.jpg'
import SearchInput from "../SearchInput/";

function Navbar({ setMoviesFilter }) {
    return (
        <header className='navbar'>
            <img className='logo' src={logo} alt="logo"/>
            <div className='search-container'>
            <SearchInput setMoviesNameFilter={ setMoviesFilter } />
                <img className='search-img' src={search_icon} alt="Input de pesquisa"/>
            </div>
            <div className='profile-container'>
                <span>Bem vinda, Nina!</span>
                <img className='profile-img' src={profile_img} alt="Foto de perfil"/>
            </div>
        </header>
    );
}

export default Navbar;