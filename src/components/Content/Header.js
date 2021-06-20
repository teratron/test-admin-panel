import React from 'react';

export default function ContentHeader(props) {
    const title = props.title ? props.title : '';

    return (
        <header id="content-header" className="content-header">
            <h1 className="title">{title}</h1>
            {props.children}
        </header>
    );
}
