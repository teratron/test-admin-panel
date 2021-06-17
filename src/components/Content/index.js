import React from 'react';

import Dashboard, {titleDashboard} from './Dashboard';
import Support, {titleSupport} from './Support';
import Tab from '../Tab';
import './content.scss';

const itemTabDashboard = [
    {
        id: 0,
        title: 'Chart',
        url: '/#content-header',
        //onClick: '',
        isActive: true
    },
    {
        id: 1,
        title: 'Report',
        url: '/#content-header',
        //onClick: '',
        isActive: false
    }
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
            {getContent(title)}
            {/*<Dashboard/>
            <Support/>*/}
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
