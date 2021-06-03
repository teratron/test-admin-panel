import React from 'react';

import './card.scss';

function Card(props) {
    let content;
    switch (typeof props.content) {
        case 'function':
            content = <props.content/>;
            break;
        case 'object':
            content = props.content;
            break;
        default:
            content = () => {
                return null;
            }
            break;
    }

    return (
        <div className="card">
            {content}
        </div>
    );
}

export default Card;