import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="App-main-sidebar">
            <FontAwesomeIcon icon={faCoffee}/>
            sidebar
        </aside>
    );
}

export default Sidebar;
