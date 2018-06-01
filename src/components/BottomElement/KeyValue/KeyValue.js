import React from 'react';
import './KeyValue.css'

const keyValue = (props) => {
    
    const style = {
        backgroundColor: props.bgcolor,
        color: props.color
    }
    
    return (
        <div className="kv-container">
            <div className="kv-box">
                {props.lhs}
            </div>
            <div className="kv-box" style={style}>
                {props.rhs}
            </div>
        </div>
    )
}

export default keyValue;