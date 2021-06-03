import React from 'react';
import logo from '../../images/logo.svg';
import './header.scss';

function Header() {
    return (
        <header className="app-header">
            <img src={logo} className="app-header-logo" alt="logo"/>
            <a href="https://reactjs.org" className="app-link">Logout</a>
        </header>
    );
}

export default Header;
