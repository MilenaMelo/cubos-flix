import React from 'react';

import './styles.css';

function PriceButton({ onClickHandler, text, price }) {
    return (
        <button className='button-movie bag-button' onClick={onClickHandler}>
            {text}
            <span className="price">R$ {price.toString().replace('.', ',')}</span>
        </button>
    );
}

export default PriceButton;