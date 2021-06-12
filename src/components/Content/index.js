import React from 'react';

import Dashboard, {titleDashboard} from './Dashboard';
import Support, {titleSupport} from './Support';
import Tab from '../Tab';
import './content.scss';

function Content() {
    let title;
    if (2 !== 1) {
        title = titleDashboard;
    } else {
        title = titleSupport;
    }

    const hasTab = function (state) {
        if (state) return <Tab/>
    }

    return (
        <section className="main-content">
            <header id="content-header" className="content-header">
                <h1 className="title">{title}</h1>
                {hasTab(true)}
            </header>
            <Dashboard/>
            <Support/>
        </section>
    );
}

export default Content;
