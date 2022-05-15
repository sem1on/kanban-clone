import React from 'react';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';

import './Board.css';

const Board = ({ board, color, addCard, removeCard }) => {

    return (
        <div className='boards'>
            <div className="board_top" style={{ backgroundColor: color}}>
                <p className="board_top_title"> 
                   {board.title}<span>{` (${board.cards.length})`}</span>
                </p>
            </div>
            <div className="boards_cards custum-scroll">
                {board.cards.map((card) => 
                    <Card
                        key={card.id}
                        card={card}
                        removeCard={removeCard}
                        boardId={board.id}
                    />
                )}
                <Editable
                    addCard={addCard}
                    boardId={board.id}
                />   
            </div>
            
        </div>
    );
};

export default Board;