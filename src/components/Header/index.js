import React from 'react';

import LoginControl from '../Login';
import logo from '../../images/logo.svg';
import './header.scss';

function Header() {
    return (
        <header className="app-header">
            <div><img src={logo} className="app-header-logo" alt="logo"/></div>
            <div/>
            <div><LoginControl/></div>
        </header>
    );
}

export default Header;
