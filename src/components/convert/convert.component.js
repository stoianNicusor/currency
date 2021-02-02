import React from 'react';
import './convert.style.scss';

function Convert(props){
    const {
        selected,
        switchC
    } = props

    return(
        <div className='convert'>
            <div className='line'>
                <input id='convert' type='number' placeholder={props.placeholder} onChange={props.change} />
                <select className='select' id='select' onChange={switchC}>
                 {  selected.map(option => (
                     <option key={option} value={option}>{option}</option>
                 ))}       
                </select>
            </div>
            <div className='equal'>
                =
            </div>
            <div className='props'>
                <span className='prop'>
                 {props.conv}
                </span>
            </div>
        </div>
    )
}

export default Convert;