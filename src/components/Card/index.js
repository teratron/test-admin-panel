import React from 'react';

import PropTypes from 'prop-types';
import './card.scss';

function Card(props) {
    const className = props.className ? 'card ' + props.className : 'card';
    const style = props.style ? props.style : null;

    let content = null;
    switch (typeof props.content) {
        case 'function':
            content = <props.content/>;
            break;
        case 'object':
            if (props.content instanceof Array) {
                content = <MultiContent content={props.content}/>;
            } else {
                content = props.content;
            }
            break;
        case 'string':
            content = props.content;
            break;
        default:
            break;
    }

    return (
        <div
            className={className}
            style={style}>
            {content}
        </div>
    );
}

function MultiContent(props) {
    return (
        <React.Fragment>
            {props.content.map((value, index) => (
                <React.Fragment key={index}>
                    <ContentItem item={value}/>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

function ContentItem(props) {
    return <props.item/>
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
