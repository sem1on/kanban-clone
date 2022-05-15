import React, { useState } from 'react';

import './Editable.css'

const Editable = ({ boardId, addCard}) => {

    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addCard(inputValue, boardId);
        setInputValue('');
        setShowEdit(false);
    };

    return (
        <div className='editable'>
            {
                showEdit ?

                <form 
                    className='editable_edit'
                    onSubmit={onSubmit}
                        >
                    <textarea 
                        type="text" 
                        placeholder='Введите заголовок для карточки'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}/>
                    <div className="editable_edit_footer">
                        <button type='submit'>Добавить карточку</button>
                        <svg  onClick={() => setShowEdit(false)} 
                        xmlns="http://www.w3.org/2000/svg" width="24" 
                        height="24" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    </div>
                </form>
            : <div  
                className='editable_butn' 
                onClick={() => setShowEdit(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <p>Добавить карточку</p> 
            </div>}
           
            
            
        </div>
    );
};

export default Editable;