import React from 'react';
import './MiddleElement.css';
import Table from './Table/Table';

const middleElement = (props) => {
    
    let width = 190;
    let more = 0;
    if ( props.name.length > 15 ){
        more = props.name.length - 15;
        more *= 15
        width += more;
    }

    const style = {
        width: width
    }

    let buttonStyle = {
        color: props.buttonColor, backgroundColor: props.buttonBGColor, opacity: props.opacity 
    }

    if ( props.seatsOK && props.timeOK && props.nameOK ) {
        buttonStyle = {
            color: 'rgb(174, 157, 9)', backgroundColor: 'rgb(245, 224, 49)', opacity: '1', cursor: 'pointer'
        }
    }

    return (
        <div className="middle-container">
            <input className="name" value={props.name}
                spellCheck={false} style={style}
                onChange={(e) => {props.nameChanged(e)}}
                onFocus={(e) => {
                    // eslint-disable-next-line
                    e.target.value===props.defaultName?e.target.value="":null
                }}
                onBlur={(e) => {
                    // eslint-disable-next-line
                    e.target.value===""?e.target.value=props.defaultName:null
                }}
                maxLength="50" />
            <div className="arrow"></div>
            <Table seats={props.seats} seatsChanged={props.seatsChanged} defaultSeatsText={props.defaultSeatsText}
                    time={props.time} timeChanged={props.timeChanged} defaultTimeText={props.defaultTimeText}
                    timeOK={props.timeOK} timeFirst={props.timeFirst} floor={props.floor}/>
            <button style={buttonStyle}
                    onClick={props.seatsOK && props.timeOK && props.nameOK?() => {props.book()}:null}>
                {props.buttonContent}
            </button>
        </div>
    )
}

export default middleElement;