import React from 'react';

import Dashboard, {titleDashboard} from './Dashboard';
import Support, {titleSupport} from './Support';
import Tab from '../Tab';
import './content.scss';

const itemTabDashboard = [
    {id: 0, title: 'Chart', href: '/#content-header', onClick: '', active: true},
    {id: 1, title: 'Report', href: '/#content-header', onClick: '', active: false},
];

function Content() {
    let title = titleDashboard;
    if (2 === 1) {
        title = titleSupport;
    }

    return (
        <section className="main-content">
            <header id="content-header" className="content-header">
                <h1 className="title">{title}</h1>
                {title === titleDashboard &&
                <nav className="tab">
                    <Tab items={itemTabDashboard} activeName="active">
                        <a href="/" className="tab-item"><React.Fragment/></a>
                    </Tab>
                </nav>}
            </header>
            <Dashboard/>
            <Support/>
        </section>
    );
}

export default Content;
