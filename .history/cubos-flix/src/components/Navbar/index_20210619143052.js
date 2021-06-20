import './style.css'
import logo from '../../assets/images/logo.svg'
import search_icon from '../../assets/images/search-icon.svg'
import profile_img from '../../assets/images/profile.jpg'


function Navbar() {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="logo"/>
            <div className='search-container'>
                <input className='search-input' type="text" name="Pesquisa" placeholder="Pesquise filmes..."/>
                <img className='search-img' src={search_icon} alt="Input de pesquisa"/>
            </div>
            <div className='profile-container'>
                <span>Bem vinda, Nina!</span>
                <img className='profile-img' src={profile_img} alt="Foto de perfil"/>
            </div>
        </div>
    );
}

export default Navbar;