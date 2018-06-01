import React from 'react';
import './Intro.css';

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const intro = (props) => {
    
    let dates = [];
    for( let i=1; i<6; i++ ){
        let date = new Date();
        date.setDate(date.getDate() + i);
        dates.push( monthNames[date.getMonth()] + ' ' + date.getDate() );
    }

    return (
        <div className="intro-container">
            <span>CHOOSE THE DATE YOU WANT TO BOOK FOR</span>
            <div className="options-container">
                <button onClick={() => {props.setDate(dates[0])}}>TOMORROW</button>
                <button onClick={() => {props.setDate(dates[1])}}>{dates[1]}</button>
                <button onClick={() => {props.setDate(dates[2])}}>{dates[2]}</button>
                <button onClick={() => {props.setDate(dates[3])}}>{dates[3]}</button>
                <button onClick={() => {props.setDate(dates[4])}}>{dates[4]}</button>
            </div>
        </div>
    )
}

export default intro;