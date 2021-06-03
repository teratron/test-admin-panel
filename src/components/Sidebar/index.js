import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import './sidebar.scss';

function Sidebar() {
    return (
        <aside className="app-main-sidebar">
            <FontAwesomeIcon icon={faCoffee}/>
            sidebar
        </aside>
    );
}

export default Sidebar;
