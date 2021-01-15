import React from 'react';
import './display.style.scss';

function Display(props){
    return(
        <div className='display'>
            {props.display}
        </div>
    )
}

export default Display;