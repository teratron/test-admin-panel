import React from 'react';

import Dashboard from './Dashboard';
import Support from './Support';
import './content.scss';

function Content() {
    return (
        <section className="main-content">
            <Dashboard/>
            <Support/>
        </section>
    );
}

export default Content;
