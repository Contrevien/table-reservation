import React from 'react';
import './Hoverer.css';

const hoverer = (props) => {
    return (
        <div className="hoverer">
            <div onClick={() => {
                // eslint-disable-next-line
                (props.default==="ENTER SEATS"&&!props.OK)?props.timeFirst():null
            }}>
                <input type="text" id="ip" style={{
                    backgroundColor: props.line,
                    position: 'relative',
                    margin: '0 auto',
                    color: props.circle,
                    fontFamily: 'Roboto',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    padding: '9px 13px',
                    borderRadius: '2px',
                    letterSpacing: '1px',
                    textAlign: 'center',
                    width: '120px',
                    height: 'auto',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    marginBottom: '-2px',
                    zIndex: '1'
                }} value={props.text}
                    onChange={(e) => {
                        props.change(e)
                    }}
                    onFocus={(e) => {
                        // eslint-disable-next-line
                        e.target.value===props.default?e.target.value="":null
                    }}
                    onBlur={(e) => {
                        // eslint-disable-next-line
                        e.target.value===""?e.target.value=props.default:null
                    }}
                    maxLength={props.max}
                    disabled={(props.default==="ENTER SEATS"&&!props.OK?true:false)} />
            </div>
            <div style={{
                height: '5px',
                width: '5px',
                position: 'relative',
                borderRadius: '50%',
                backgroundColor: props.circle,
                margin: '0 auto',
                zIndex: '10'
            }}></div>
            <div style={{ height: '50px', width: '1px', backgroundColor: props.line, margin: '0 auto' }}></div>
        </div>
    )
}

export default hoverer;