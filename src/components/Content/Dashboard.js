import React from 'react';

import ContentHeader from './Header';
import DashboardChart from './DashboardChart';
import DashboardReport from './DashboardReport';
import Switch from "../Switcher";

export const titleDashboard = 'Dashboard';

const itemTabDashboard = [
    {
        id: '0',
        title: 'Chart',
        url: '/#content-header',
        isActive: true
    },
    {
        id: '1',
        title: 'Report',
        url: '/#content-header'
    },
    {
        id: '2',
        title: 'Report42',
        url: '/#content-header'
    }
];

function Dashboard() {
    return (
        <React.Fragment>
            <ContentHeader title={titleDashboard}>
                <nav className="tab">
                    <Switch cases={itemTabDashboard} activeName="active">
                        <a href="/" className="tab-item"><React.Fragment/></a>
                    </Switch>
                </nav>
            </ContentHeader>
            <DashboardChart/>
            <DashboardReport/>
        </React.Fragment>
    );
}

export default Dashboard;
