import React from 'react';
import './convert.style.scss';

function Convert(props){
    return(
        <div className='convert'>
            <input  id='convert' placeholder={props.placeholder} onChange={props.change}/>
            <div className='equal'>
                =
            </div>
            <div className='props'>
                {props.conv}
            </div>
        </div>
    )
}

export default Convert;