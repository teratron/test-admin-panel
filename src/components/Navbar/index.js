import React from 'react';

import Tab from '../Tab';
import './navbar.scss';

function Navbar(props) {
    const title = props.title ? props.title : 'Title';
    const color = props.color ? ' navbar-' + props.color : ' navbar-primary';
    const tabbed = props.tabbed ? ' navbar-tabbed' : '';
    const sticking = props.sticking ? ' navbar-sticking' : '';
    const shadowed = props.shadowed ? ' navbar-shadowed' : '';

    return (
        <>
            <header className={`navbar${color}${tabbed}${sticking}${shadowed}`}>
                <div>
                    <h1 className="title">{title}</h1>
                </div>
                <div/>
                <div/>
            </header>
            <Tab/>
        </>
    )
}

Navbar.defaultProps = {
    tabbed: '',
    sticking: '',

};

export default Navbar;