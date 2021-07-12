import React from 'react';

import Switcher, { switcherItem /*activeItem*/ } from '../../Switcher';
import ContentHeader from '../Header';
import DashboardChart from './Chart';
import DashboardReport from './Report';

export const titleDashboard = 'Dashboard';

const dashboardSwitcher = {
    type: 'nav',
    activeName: 'active',
    attr: {
        id: 'dashboard-tab',
        className: 'tab'
    },
    item: {
        type: 'a',
        attr: {
            className: 'tab-item_'
        },
    },
    items: [
        {
            id: 'tab_chart_id',
            type: 'a',
            title: 'Chart',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
            isActive: true
        },
        {
            id: 'tab_report_id',
            type: 'a',
            title: 'Report',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
        },
        {
            id: 'tab_report2_id',
            type: 'a',
            title: 'Report2',
            attr: {
                href: '/#content-header',
                className: 'tab-item'
            },
            isDisable: true
        }
    ]
};

function Dashboard() {
    console.log(switcherItem);
    //activeItem()
    return (
        <>
            <ContentHeader title={titleDashboard}>
                {/*<nav className="tab">
                    <Switcher items={itemTabDashboard} activeName="active" />
                </nav>*/}
                <Switcher data={dashboardSwitcher} />
            </ContentHeader>
            <DashboardChart />
            <DashboardReport />
        </>
    );
}

export default Dashboard;
