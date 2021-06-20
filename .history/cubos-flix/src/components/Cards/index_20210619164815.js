import './style.css'
import card_movie from '../../assets/images/golden-star.svg'

function Card() {
    return (
        <div className='card-container'>
            <div className='movie-card'>
                <div className="info-card">
                    <h3 className='name-movie'>Joker</h3>
                    <div className="pointing-movie">
                        <img src={card_movie} alt="Ícone de estrela" />
                        <span>8.5</span>
                    </div>
                </div>
                <button class="button-movie">
                    <span className="name">Sacola</span>
                    <span className="price">R$ 9,5</span>
                </button>
            </div>
        </div>
    );
}

export default Card;