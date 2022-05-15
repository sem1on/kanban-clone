import React from 'react';

import Card from '../Card/Card';
import Editable from '../Editable/Editable';

import './Board.css';

const Board = (props) => {

    const { board, color, addCard, removeCard,  dropHendler, dropCardHendler, dragOverHendler, dragStartHendler } = props;

    return (
        <div 
            className='boards'
            onDragOver={(e) => dragOverHendler(e)}
            onDrop={(e) => dropCardHendler(e, board)}>
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
                        board={board}
                        dropHendler={dropHendler}
                        dragOverHendler={dragOverHendler}
                        dragStartHendler={dragStartHendler}
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