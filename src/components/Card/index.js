import React from 'react';

import PropTypes from 'prop-types';
import './card.scss';

function Card(props) {
    const className = props.className ? 'card ' + props.className : 'card';
    const style = props.style ? props.style : null;

    return (
        <div
            className={className}
            style={style}>
            {getContent(props)}
        </div>
    );
}

function getContent(props) {
    switch (typeof props.content) {
        case 'function':
            return <props.content/>;
        case 'object':
            if (props.content instanceof Array) {
                return getMultiContent({contents: props.content});
            } else {
                return props.content;
            }
        case 'string':
            return props.content;
        default:
            return null;
    }
}

function getMultiContent(props) {
    return (
        <React.Fragment>
            {props.contents.map((value, index) => (
                <React.Fragment key={index}>
                    {getContent({content: value})}
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

Card.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.any),
        PropTypes.bool,
        PropTypes.func,
        PropTypes.object,
        PropTypes.string
    ])
}

export default Card;
