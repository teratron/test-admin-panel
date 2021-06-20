import React from 'react';

import './card.scss';

function Card(props) {
    return (
        <div
            className={props.className ? 'card ' + props.className : 'card'}
            style={props.style ? props.style : null}
        >
            {props.content ? props.content : props.children}
        </div>
    );
}

export default Card;
