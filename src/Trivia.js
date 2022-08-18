import React from 'react';
import './Trivia.css';
import { Question } from './Question';
import yellow_blob from './yellow_blob.png';
import blue_blob from './blue_blob.png';

export const Trivia = (props) => {
    return (
        <div className='trivia-page'>
            <img src={yellow_blob} className='yellow-blob' alt='yellow-blob' />
            <img src={blue_blob} className='blue-blob' alt='blue-blob' />
            <div className='trivia-questions-container'>
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
            <button 
                className='trivia-back-to-main-button'
                onClick={props.handleClick}
                >
                    Back to Main Menu
            </button>
        </div>
    )
}