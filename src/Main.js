import React from 'react';
import './Main.css';
import yellow_blob from './yellow_blob.png';
import blue_blob from './blue_blob.png';

export const Main = () => {
    return (
        <div className='main-menu'>
            <img src={yellow_blob} className='yellow-blob' alt='yellow-blob' />
            <img src={blue_blob} className='blue-blob' alt='blue-blob' />
            <div className='main-menu-content'>
                <h1>Quizzical</h1>
                <h4>An exciting trivia game!</h4>
                <button className='main-menu--start-button'>Start quiz</button>
            </div>
        </div>
    )
}
