import React from 'react';

import Dashboard, {titleDashboard} from './Dashboard';
import Support, {titleSupport} from './Support';
import './content.scss';

function Content() {
    let title = titleDashboard;
    if (2 === 1) {
        title = titleSupport;
    }

    return (
        <section className="main-content">
            {getContent(title)}
        </section>
    );
}

function getContent(title) {
    switch (title) {
        default:
        case titleDashboard:
            return <Dashboard/>
        case titleSupport:
            return <Support/>
    }
}

export default Content;
