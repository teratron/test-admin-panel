import React from 'react';
import logo from './logo.svg';
import './Header.css';


function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-header-logo" alt="logo"/>
            <a href="https://reactjs.org" className="App-link">Logout</a>
        </header>
    );
}

export default Header;
