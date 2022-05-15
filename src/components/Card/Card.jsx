import React from 'react';

import './Card.css'

const Card = (props) => {

    const { card, removeCard, board, dropHendler, dragOverHendler, dragStartHendler } =props;

    return (
        <div
            className='card'
            draggable
            onDragStart={(e) => dragStartHendler(e, board, card)}
            onDragOver={(e) => dragOverHendler(e)}
            onDrop={(e) => dropHendler(e, board, card)}>
            <div className="card_clouse">
                <svg onClick={() => removeCard(card.id, board.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
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