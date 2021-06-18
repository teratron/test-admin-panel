import React from 'react';

import Dashboard, {titleDashboard} from './Dashboard';
import Support, {titleSupport} from './Support';
import Switch from '../Tab';
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
    },
    {
        id: 2,
        title: 'Report42',
        url: '/#content-header',
        //onClick: '',
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
                    <Switch cases={itemTabDashboard} activeName="active">
                        <a href="/" className="tab-item"><React.Fragment/></a>
                    </Switch>
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
