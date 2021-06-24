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
        type: 'a',
        title: 'Chart',
        hover: {
            title: 'Chart',
        },
        active: {
            title: 'Chart',
        },
        focus: {
            title: 'Chart',
        },
        attr: {
            ref: null,
            href: '/#content-header',
            className: 'tab-item',
        },
        isActive: true
    },
    {
        id: 'tab_report_id',
        type: 'a',
        title: 'Report',
        attr: {
            ref: null,
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
