import React from 'react';
import PropTypes from 'prop-types';
import './display.style.scss';

function Display(props){
    return(
        <div className='display'>
            {props.display}
        </div>
    )
}

Display.propTypes = {
    display: PropTypes.any
}
export default Display;

