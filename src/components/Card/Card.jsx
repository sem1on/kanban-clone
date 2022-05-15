import React from 'react';

import './Card.css'

const Card = ({ card, removeCard, boardId }) => {
    return (
        <div className='card'>
            <div className="card_clouse">
                <svg onClick={() => removeCard(card.id, boardId)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    viewBox="0 0 24 24" fill="ffffff" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
            <div className="card_id">id: <span>{`${card.id}`}</span></div>
            <div className="card_text">{`${card.text}`}</div>
        </div>
    );
};

export default Card;