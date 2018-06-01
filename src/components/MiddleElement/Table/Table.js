import React from 'react';
import './Table.css';
import bowl from '../../../assets/bowl.jpg';   
import Hoverer from '../Hoverer/Hoverer';

const table = (props) => {
        return (
            <div className="table">
                <div className="things">
                    <Hoverer line="#EEE" circle="rgb(127, 142, 156)"
                            text={props.time} change={props.timeChanged}
                            default={props.defaultTimeText} max="5" />
                    <img src={bowl} alt="Bowl" className="bowl" />
                    <Hoverer line={props.floor==="veg"?"#76CC89":"rgb(232, 111, 104)"}
                            circle={props.floor==="veg"?"rgb(88, 139, 87)":"#fff"}
                            text={props.seats} change={props.seatsChanged}
                            default={props.defaultSeatsText} max="1"
                            OK={props.timeOK} timeFirst={props.timeFirst} />
                </div>
                <div className="tableTop"></div>
                <div className="leg left"></div>
                <div className="leg right"></div>
                <div className="shadow"></div>
            </div>
        );
}

export default table;