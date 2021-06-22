import React from 'react';

import ContentHeader from './Header';
import DashboardChart from './DashboardChart';
import DashboardReport from './DashboardReport';
import Switcher from "../Switcher";
import './tab.scss';

export const titleDashboard = 'Dashboard';

const itemTabDashboard = [
    {
        id: 'tab_chart_id',
        title: 'Chart',
        type: 'a',
        attr: {
            href: '/#content-header',
            className: 'tab-item'
        },
        isActive: true
    },
    {
        id: 'tab_report_id',
        title: 'Report',
        type: 'a',
        attr: {
            href: '/#content-header',
            className: 'tab-item'
        }
    }
];

function Dashboard() {
    return (
        <React.Fragment>
            <ContentHeader title={titleDashboard}>
                <nav className="tab">
                    <Switcher items={itemTabDashboard} activeName="active"/>
                </nav>
            </ContentHeader>
            <DashboardChart/>
            <DashboardReport/>
        </React.Fragment>
    );
}

export default Dashboard;
