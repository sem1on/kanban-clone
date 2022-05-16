import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {
    
    const startBoards = [
        {
            id: 1, 
            color: 'rgb(250, 125, 68)',
            title: 'ON HOLD', 
            cards: [],
        },
        {
            id: 2,
            title: 'IN PROGRESS',
            color: 'rgb(42, 145, 193)',
            cards: [],
        },
        {
            id: 3,
            title: 'NEEDS REVIEW',
            color: 'rgb(240, 206, 68)',
            cards: [],
        },
        {
            id: 4,
            title: 'APPROVED',
            color: 'rgb(0, 187, 93)',
            cards: [],
        },
    ];

    const [boards, setBoards] = useState(JSON.parse(localStorage.getItem('boards')) || startBoards);

    useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards))
    }, [boards]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);

    const addCardHendler =(text, boardId) => {
        const newCard = {
            id: Date.now() + Math.random(),
            text,
        };

        const index = boards.findIndex((item) => item.id === boardId);
        if (index < 0) return;

        const tempDoards = [...boards];
        tempDoards[index].cards.push(newCard);
        setBoards(tempDoards);
    }

    const removeCardHendler = (cardId, boardId) => {
        const index = boards.findIndex((item) => item.id === boardId);
        if (index < 0) return;

        const tempDoards = [...boards];
        const newCards = tempDoards[index].cards;

        const cIndex = newCards.findIndex((item) => item.id === cardId);
        if (cIndex < 0) return;

        newCards.splice(cIndex, 1);
        setBoards(tempDoards); 
    }

    const dragStartHendler = (e, board, card) => {
        setCurrentCard(card);
        setCurrentBoard(board);
    }

    const dragOverHendler = (e) => {
        e.preventDefault();
    }

    const dropHendler = (e, board, card) => {
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = currentBoard.cards.indexOf(currentCard)
        currentBoard.cards.splice(currentIndex, 1)
        const dropIndex = board.cards.indexOf(card)
        board.cards.splice(dropIndex  + 1, 0, currentCard)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }));
        
        console.log(e.target.className);
        
    }

    const dropCardHendler = (e, board) => {
        board.cards.push(currentCard)
        const currentIndex = currentBoard.cards.indexOf(currentCard)
        currentBoard.cards.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <div className="app">
            {boards.map((board) => 
                <Board
                    key={board.id}
                    color={board.color}
                    board={board}
                    addCard={addCardHendler}
                    removeCard={removeCardHendler}
                    dragOverHendler={dragOverHendler}
                    dropCardHendler={dropCardHendler}
                    dragStartHendler={dragStartHendler}
                    dropHendler={dropHendler}
                />
            )}
        </div>
  );
}

export default App;
