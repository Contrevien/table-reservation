import React from 'react';
import './BottomElement.css';
import KeyValue from './KeyValue/KeyValue';

const bottomElement = (props) => {

    return (
        <div className="bottom-container">
            <div style={{display: 'flex'}}>
                <KeyValue lhs="SERVER" rhs={props.details[0]} bgcolor={props.floor==="veg"?"#76CC89":"rgb(232, 111, 104)"}
                            color={props.floor==="veg"?"rgb(88, 139, 87)":"#fff"} />
                <KeyValue lhs="SERVICE" rhs={props.details[1]} bgcolor="#FFF" color="rgb(127, 142, 156)" />
            </div>
            <div style={{display: 'flex'}}>
                <KeyValue lhs="TABLE" rhs={props.details[2]} bgcolor="#DDD" color="rgb(127, 142, 156)" />
                <KeyValue lhs="STATUS" rhs={props.details[3]} bgcolor="#4697CE" color="#30415B" />
            </div>
        </div>
    )
}

export default bottomElement;