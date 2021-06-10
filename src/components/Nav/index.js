import React from 'react';

import {faLifeRing, faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './nav.scss';

function Nav() {
    return (
        <nav className="nav">
            <a href="/#" className="nav-item active">
                <FontAwesomeIcon icon={faTachometerAlt}/>
                <span>Dashboard</span>
            </a>
            <a href="/#" className="nav-item">
                <FontAwesomeIcon icon={faLifeRing}/>
                <span>Support</span>
            </a>
        </nav>
    )
}

export default Nav;
