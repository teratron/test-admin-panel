import React from 'react';

import PropTypes from 'prop-types';
import './card.scss';

function Card(props) {
    const className = props.className ? 'card ' + props.className : 'card';
    const style = props.style ? props.style : null;
    console.log(typeof props.content[0], typeof props.content[1])
    /*let content = null;
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
    }*/
    //console.log(props.content)
    //const content = GetContent(props);
//window.console.log(content)
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
                return <MultiContent contents={props.content}/>;
            } else {
                return props.content;
            }
        case 'string':
            return props.content;
        default:
            return null;
    }
}

function MultiContent(props) {
    return (
        <React.Fragment>
            {props.contents.map((value, index) => (
                <React.Fragment key={index}>
                    {/*<ContentItem item={value}/>*/}
                    {/*<GetContent content={value}/>*/}
                    {getContent({content: value})}
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

/*function ContentItem(props) {
    //console.log(typeof props.item)
    return <props.item/>
    //return getContent(props.item)
}*/

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
