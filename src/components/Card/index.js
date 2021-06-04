import React from 'react';

import PropTypes from 'prop-types';
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
            content = () => null;
            break;
    }

    return (
        <div className="card">
            {content}
        </div>
    );
}

Card.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ])
}

export default Card;
