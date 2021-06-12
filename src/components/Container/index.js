/*
--------------------------------------------
 For example:
--------------------------------------------
    <Container/>
    <Container content={Table}/>
    <Container content={[Button, ChartLine, 'Lorem ipsum dolor sit amet']}/>
    <Container content={<Button text="Configuring report" color="accent" rounded shadowed/>}/>
    <Container content={'Lorem ipsum dolor sit amet'}/>
    <Container
        className="card"
        style={{width: '30%'}}
        content={[
            <p>Lorem ipsum dolor sit amet</p>,
            <output>5,489</output>
        ]}/>
--------------------------------------------
*/
import React from 'react';

import PropTypes from 'prop-types';

function Container(props) {
    const className = props.className ? props.className : null;
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

Container.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.any),
        PropTypes.bool,
        PropTypes.func,
        PropTypes.object,
        PropTypes.string
    ])
}

export default Container;
