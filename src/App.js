import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {

    const [boards, setBoards] = useState([
        {
            id: 1, 
            color: 'rgb(253, 146, 24)',
            title: 'ON HOLD', 
            cards: [
                {id: Date.now() + Math.random(), text: "fdfdfdfd"},
                {id: Date.now() + Math.random(), text: "fffff"},
                {id: Date.now() + Math.random(), text: "ggg"},
            ],
        },
        {
            id: 2,
            title: 'IN PROGRESS',
            color: 'rgb(24, 203, 253)',
            cards: [
                {id: Date.now() + Math.random(), text: "aaaa"},
                {id: Date.now() + Math.random(), text: "ttttt"},
                {id: Date.now() + Math.random(), text: "hhhhhh"},
            ],
        },
        {
            id: 3,
            title: 'NEEDS REVIEW',
            color: 'rgb(210, 194, 46)',
            cards: [
                {id: Date.now() + Math.random(), text: "yyyyy"},
                {id: Date.now() + Math.random(), text: "uuuuuu"},
                {id: Date.now() + Math.random(), text: "pppppp"},
            ],
        },
        {
            id: 4,
            title: 'APPROVED',
            color: 'rgb(53, 193, 43)',
            cards: [
                {id: Date.now() + Math.random(), text: "bbbb"},
                {id: Date.now() + Math.random(), text: "nnnn"},
                {id: Date.now() + Math.random(), text: "kkk"},
            ],
        },
    ]);

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
        }))  
    }

    const dropCardHendler = (e, board) => {
        if(e.target.className !== "card") { 
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
