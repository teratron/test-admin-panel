import React from 'react';

import './navbar.scss';

function Navbar(props) {
    const title = props.title ? props.title : 'Title';
    const color = props.color ? ' navbar-' + props.color : ' navbar-primary';
    const tabbed = props.tabbed ? ' navbar-tabbed' : '';
    const sticking = props.sticking ? ' navbar-sticking' : '';
    const shadowed = props.shadowed ? ' navbar-shadowed' : '';
    const className = `navbar${color}${tabbed}${sticking}${shadowed}`;

    return (
        <header className={className}>
            <div>
                <h1 className="title">{title}</h1>
            </div>
            <div/>
            <div/>
        </header>
    )
}

Navbar.defaultProps = {
    tabbed: '',
    sticking: '',
    shadowed: ''
};

export default Navbar;